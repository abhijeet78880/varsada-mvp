import { Link } from 'react-router-dom';
import { Heart } from '../../../assets/icons';

export default function ProductCard1({ img = '/image/img2.jpeg' }) {
  return (
    <Link to={'/product?id'}>
      <div className="h-fit flex flex-col cursor-pointer dim snap-center">
        <div className="h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden relative">
          <img src={img} alt="dress" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 p-2 w-full flex justify-between items-center">
            <div className="caption bg-secondary px-2 text-white rounded-br-md rounded-tl-md h-fit">
              45% off
            </div>
            <div className="rounded-full bg-white p-1 opacity-40 hover:opacity-100 transition-opacity">
              <Heart />
            </div>
          </div>
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
