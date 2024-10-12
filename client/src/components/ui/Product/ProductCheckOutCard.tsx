import { Heart } from '../../../assets/icons';

const sizes = ['S', 'M', 'L', 'XL'];

export default function ProductCheckOutCard({
  img = '/image/img2.jpeg',
  selectedSize = 'XL',
}) {
  return (
    <div className="flex gap-4 max-h-[300px] overflow-hidden">
      <div className="h-fit flex flex-col cursor-pointer dim snap-center w-1/2">
        <div className="h-full overflow-hidden relative">
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
      </div>
      <div className="flex flex-col gap-2  w-1/2">
        <p className="body2">Colred Red Lehanga with masta malag</p>

        <p className="caption">color red</p>

        <p className="body2">$2000</p>

        <p className="">Size</p>
        <div className="grid grid-cols-4 max-w-[200px] gap-6">
          {sizes.map((size) => (
            <button
              key={size}
              className={`border aspect-square border-gray-300  rounded-md font-semibold ${selectedSize === size ? 'bg-secondary text-white border-secondary' : ''}`}
            >
              {size}
            </button>
          ))}
        </div>

        <p>Quantity</p>
        <div className="grid grid-cols-[20%60%20%] bg-transparent border-2 border-secondary body1 rounded-md font-bold justify-between max-w-[150px]">
          <button className="text-gray-400">-</button>
          <span className="p-1 text-center">1</span>
          <button className="text-gray-400">+</button>
        </div>
      </div>
    </div>
  );
}
