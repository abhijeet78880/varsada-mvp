export default function ProductCard2() {
  return (
    <div className="h-fit flex flex-col cursor-pointer snap-center">
      <div className="overflow-hidden">
        <img src="/image/img2.jpeg" alt="dress" className=" object-cover" />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-4">
        <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
        <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
      </div>
    </div>
  )
}