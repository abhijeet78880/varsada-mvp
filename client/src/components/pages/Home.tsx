import Carousel from '../ui/Home/Carousel';

export default function Home() {
  const slides = [
    { image: '/image/ban1.png', caption: 'Slide 1' },
    { image: '/image/ban2.png', caption: 'Slide 2' },
    { image: '/image/ban3.png', caption: 'Slide 3' },
  ];

  return (
    <>
      <div className="w-full bg-black">
        <Carousel slides={slides} interval={4000} />
      </div>
    </>
  );
}
