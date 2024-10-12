export default function FilterSize() {
  return (
    <div className="flex flex-col gap-4">
      <h4>Size</h4>
      <div className="grid grid-cols-3 gap-4 max-w-[250px]">
        <div className="bg-gray-200 py-2 px-4 caption text-black rounded-full text-center">
          <p>Large</p>
        </div>
        <div className="bg-secondary py-2 px-4 caption text-white rounded-full text-center">
          <p>Small</p>
        </div>
        <div className="bg-gray-200 py-2 px-4 caption text-black rounded-full text-center">
          <p>Medium</p>
        </div>
        <div className="bg-gray-200 py-2 px-4 caption text-black rounded-full text-center">
          <p>XLarge</p>
        </div>
        <div className="bg-gray-200 py-2 px-4 caption text-black rounded-full text-center">
          <p>XXLarge</p>
        </div>
        <div className="bg-gray-200 py-2 px-4 caption text-black rounded-full text-center">
          <p>Large</p>
        </div>
      </div>
    </div>
  );
}
