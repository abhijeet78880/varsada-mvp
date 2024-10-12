import { CoinIcon } from '../../../assets/icons';

export default function ProductPrice() {
  return (
    <>
      <div className="flex gap-4 items-center">
        <p className="text-3xl font-semibold">₹2,160.00</p>
        <p className="text-xl text-accent line-through">₹2160.00</p>
        <p className="text-xl text-black">+</p>
        <span className="flex items-center gap-2">
          <CoinIcon />
          <p className="text-xl text-black font-bold">21</p>
          <div className="caption bg-secondary px-3 text-white rounded-md">
            {' '}
            60% off
          </div>
        </span>
      </div>
      <p className="subtitle2 font-[500] pb-2">inclusive of all taxes</p>
    </>
  );
}
