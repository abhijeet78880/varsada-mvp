import React, { useState, useEffect, useRef } from 'react';

interface Slide {
  image: string;
  caption: string;
}

interface CarouselProps {
  slides: Slide[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    slideTimeout.current = setTimeout(nextSlide, interval);

    return () => {
      if (slideTimeout.current) {
        clearTimeout(slideTimeout.current);
      }
    };
  }, [currentSlide, interval]);

  return (
    <div className="relative w-full h-[655px] overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover"
            />
            {/* this is caption they are to be put here */}
            <div className="absolute bottom-5 left-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-secondary' : 'bg-white'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
