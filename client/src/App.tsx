import Carousel from "./components/ui/Carousel";
import Navbar from "./components/ui/Navbar";

export default function App() {

  const slides = [
    { image: '/image/ban1.png', caption: 'Slide 1' },
    { image: '/image/ban2.png', caption: 'Slide 2' },
    { image: '/image/ban3.png', caption: 'Slide 3' },
  ];

  return (
    <main className=" overflow-hidden w-[100dvw] h-[100dvh]">
        <div className="mx-auto max-w-[1440px] overflow-x-hidden">
          <Navbar />
          <div className="w-full bg-black">
            <Carousel slides={slides} interval={4000} />
          </div>
        </div>
    </main>
  )
}