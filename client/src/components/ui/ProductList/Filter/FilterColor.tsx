export default function FilterColor() {
  return (
    <div className="flex flex-col gap-4">
      <h4>Colors</h4>
      <div className="grid grid-cols-5 gap-4 max-w-[250px]">
        <div className="p-1 bg-red-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-blue-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-pink-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-slate-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-orange-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-yellow-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-lime-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-emerald-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-cyan-500 aspect-square rounded-full"></div>
        <div className="p-1 bg-violet-500 aspect-square rounded-full"></div>
      </div>
    </div>
  );
}
