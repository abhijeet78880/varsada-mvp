import { useState } from 'react';
import '../../../utils.css';

export default function ProductSizeBox() {
  const [selectedSize, setSelectedSize] = useState('XL');

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <h4>Size</h4>
        <button className="body1 text-secondary">Product Measurements</button>
      </div>
      <div className="grid grid-cols-4 max-w-[230px] gap-6 mt-4">
        {sizes.map((size) => (
          <button
            key={size}
            className={`border aspect-square border-gray-300 px-4 py-2 rounded-md font-semibold ${selectedSize === size ? 'bg-secondary text-white border-secondary' : ''}`}
            onClick={() => {
              console.log('button clicked---> ' + size);
              setSelectedSize(size);
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
