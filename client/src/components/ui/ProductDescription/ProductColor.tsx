export default function ProductColor() {
  return (
    <div className="mt-4">
      <h4>Color</h4>
      <div className="grid grid-cols-5 gap-4 max-w-[230px] mt-4">
        <div className="bg-red-500 p-4 rounded-full aspect-square"></div>
        <div className="bg-blue-500 p-4 rounded-full aspect-square"></div>
        <div className="bg-orange-500 p-4 rounded-full aspect-square"></div>
        <div className="bg-green-500 p-4 rounded-full aspect-square"></div>
        <div className="bg-cyan-500 p-4 rounded-full aspect-square"></div>
      </div>
    </div>
  );
}
