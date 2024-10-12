export default function Category() {
  return (
    <section className="py-11">
      <div className="flex flex-col justify-center items-center">
        <h3 className="capitalize">shop by category</h3>
        <a href="" className="body1">
          view more
        </a>
      </div>
      <div className="pt-11 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-red-50 relative cursor-pointer zoom">
          <img
            src="/image/img2.jpeg"
            className="object-cover filter brightness-75 w-full h-full"
          />
          <div className="w-full h-full absolute top-0 left-0 flex text-white font-bold sm:text-xl capitalize justify-center items-center">
            Active Wear {'>'}
          </div>
        </div>
        <div className="bg-red-50 relative cursor-pointer zoom">
          <img
            src="/image/img16.webp"
            className="object-cover filter brightness-75 w-full h-full"
          />
          <div className="w-full h-full absolute top-0 left-0 flex text-white font-bold sm:text-xl capitalize justify-center items-center">
            Party Wear {'>'}
          </div>
        </div>
        <div className="bg-red-50 relative cursor-pointer zoom">
          <img
            src="/image/img14.webp"
            className="object-cover filter brightness-75 w-full h-full"
          />
          <div className="w-full h-full absolute top-0 left-0 flex text-white font-bold sm:text-xl capitalize justify-center items-center">
            Denim Wear {'>'}
          </div>
        </div>
        <div className="bg-red-50 relative cursor-pointer zoom">
          <img
            src="/image/img13.webp"
            className="object-cover filter brightness-75 w-full h-full"
          />
          <div className="w-full h-full absolute top-0 left-0 flex text-white font-bold text-xl capitalize justify-center items-center">
            Casual Wear {'>'}
          </div>
        </div>
      </div>
    </section>
  );
}
