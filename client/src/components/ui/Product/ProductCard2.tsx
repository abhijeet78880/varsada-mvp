import { Link } from 'react-router-dom';

export default function ProductCard2({ img = '/image/img2.jpeg' }) {
  return (
    <Link to={'/product?id'}>
      <div className="h-fit flex flex-col cursor-pointer snap-center dim">
        <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[370px] lg:h-[600px] overflow-hidden">
          <img src={img} alt="dress" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex flex-col items-center justify-center py-4">
          <p className="subtitle1 text-xs sm:text-sm md:text-base">
            Venus Halter Dress
          </p>
          <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
        </div>
      </div>
    </Link>
  );
}
