import BestSeller from '../ui/Home/BestSeller';
import Carousel from '../ui/Home/Carousel';
import CategoryBox from '../ui/Home/CategorySection';
import Trending from '../ui/Home/Trending';
import Footer from '../ui/Layout/Footer';

export default function Home() {
  const slides = [
    { image: '/image/ban1.png', caption: 'Slide 1' },
    { image: '/image/ban2.png', caption: 'Slide 2' },
    { image: '/image/ban3.png', caption: 'Slide 3' },
  ];

  return (
    <>
      <div className="w-full fade">
        <Carousel slides={slides} interval={4000} />
        <CategoryBox />
        <Trending />
        <BestSeller />
        <Footer />
      </div>
    </>
  );
}
