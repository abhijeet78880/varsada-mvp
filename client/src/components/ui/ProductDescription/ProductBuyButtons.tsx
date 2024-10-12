export default function ProductBuyButtons() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="grid grid-cols-[35%calc(65%-16px)] gap-4">
        <div className="grid grid-cols-[20%60%20%] bg-transparent border-2 border-secondary body1 rounded-md font-bold justify-between">
          <button className="text-gray-400">-</button>
          <span className="p-4 text-center">1</span>
          <button className="text-gray-400">+</button>
        </div>
        <button className="bg-transparent border-2 border-secondary body1 rounded-md font-bold ">
          Add to Varsada Bag
        </button>
      </div>
      <button className="bg-secondary body1 text-white rounded-md p-4 font-bold">
        Shop This
      </button>
      <p className="text-center text-accent body1 font-bold capitalize">
        Only 5 Stock Left for delivery
      </p>
    </div>
  );
}
