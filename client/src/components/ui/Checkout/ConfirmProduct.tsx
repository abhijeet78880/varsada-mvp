import { Checkbox } from 'antd';
import ProductSelect from './ProductSelect';

export default function ConfirmProduct() {
  return (
    <div className="grid grid-cols-2 gap-11">
      <ProductSelect />
      <div className="flex flex-col gap-4">
        <p className="body1">Have a Coupon ?</p>

        <input
          type="text"
          name=""
          id=""
          className="p-2 bg-transparent border border-gray-400 rounded-sm"
          placeholder="Coupon Code"
        />

        <Checkbox>Redeem 21 Coins</Checkbox>

        <div className="flex flex-col gap-4 m-6">
          <p className="body1">Varsada Bag Summary</p>
          <div className="flex justify-between">
            <p className="body2">Subtotal</p>
            <p className="body2 text-gray-400">$2000</p>
          </div>
          <div className="flex justify-between">
            <p className="body2">Subtotal</p>
            <p className="body2 text-gray-400">$2000</p>
          </div>
          <div className="flex justify-between">
            <p className="body2">Subtotal</p>
            <p className="body2 text-red-400">-$2000</p>
          </div>
          <div className="flex justify-between">
            <p className="body2">Subtotal</p>
            <p className="body2 text-red-400">-$2000</p>
          </div>
          <div className="flex justify-between">
            <p className="body2">Subtotal</p>
            <p className="body2 text-gray-400">$2000</p>
          </div>
          <div className="flex justify-between">
            <p className="body2">Total</p>
            <p className="body2">$2000</p>
          </div>
        </div>

        <button className="bg-secondary rounded-md p-3 text-white">
          Checkout
        </button>
      </div>
    </div>
  );
}
