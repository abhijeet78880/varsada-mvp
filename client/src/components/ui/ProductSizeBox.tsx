import { useState } from "react";
import "../../utils.css";

export default function ProductSizeBox() {
  const [selectedSize, setSelectedSize] = useState('XL');

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="size-selection">
      <h4>Size</h4>
      {sizes.map(size => (
        <button 
          key={size} 
          className={`size-btn ${selectedSize === size ? 'active' : ''}`}
          onClick={() => {
            console.log("button clicked---> "+ size);
            setSelectedSize(size);
          
          }}
        >
          {size}
        </button>
      ))}
    </div>
  )
}