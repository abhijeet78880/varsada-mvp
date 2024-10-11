import { Link } from "react-router-dom"

export default function Trending() {
  return (
    <section className="pb-11">
      <div className="flex flex-col justify-center items-center pb-11">
        <h3 className="capitalize">Trending Today</h3>
        <a href="" className="body1">view more</a>
      </div>
      <div className="overflow-hidden mx-8">
        <div className="w-full overflow-x-auto no-scrollbar h-fit snap-x">
          <div className="flex space-x-4 h-fit flex-grow">

            <Link to={"/product?id"}>
              <div className="h-fit flex flex-col cursor-pointer snap-center">
                <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                  <img src="/image/img2.jpeg" alt="dress" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                  <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
                  <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
                </div>
              </div>
            </Link>

            <Link to={"/product?id"}>
              <div className="h-fit flex flex-col cursor-pointer snap-center">
                <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                  <img src="/image/img9.jpeg" alt="dress" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                  <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
                  <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
                </div>
              </div>
            </Link>

            <Link to={"/product?id"}>
              <div className="h-fit flex flex-col cursor-pointer snap-center">
                <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                  <img src="/image/img10.jpeg" alt="dress" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                  <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
                  <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
                </div>
              </div>
            </Link>

            <Link to={"/product?id"}>
              <div className="h-fit flex flex-col cursor-pointer snap-center">
                <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                  <img src="/image/img12.webp" alt="dress" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                  <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
                  <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
                </div>
              </div>
            </Link>

            <Link to={"/product?id"}>
              <div className="h-fit flex flex-col cursor-pointer snap-center">
                <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                  <img src="/image/img11.webp" alt="dress" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                  <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
                  <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
                </div>
              </div>
            </Link>

            <Link to={"/product?id"}>
              <div className="h-fit flex flex-col cursor-pointer snap-center">
                <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] overflow-hidden">
                  <img src="/image/img1.png" alt="dress" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-col items-center justify-center py-4">
                  <p className="subtitle1 text-xs sm:text-sm md:text-base">Venus Halter Dress</p>
                  <p className="body1 text-xs sm:text-sm md:text-base">Rs 5000</p>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}