import ProductCard2 from '../Product/ProductCard2';

export default function Trending() {
  return (
    <section className="pb-11" id="trending">
      <div className="flex flex-col justify-center items-center pb-11">
        <h3 className="capitalize">Trending Today</h3>
        <a href="" className="body1">
          view more
        </a>
      </div>
      <div className="overflow-hidden mx-8">
        <div className="w-full overflow-x-auto no-scrollbar h-fit snap-x">
          <div className="flex space-x-4 h-fit flex-grow">
            <ProductCard2 img="/image/DSC04655.JPG" />
            <ProductCard2 img="/image/DSC04680.JPG" />
            <ProductCard2 img="/image/DSC04668.JPG" />
            <ProductCard2 img="/image/DSC04643.JPG" />
            <ProductCard2 img="/image/img11.webp" />
            <ProductCard2 img="/image/img1.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
