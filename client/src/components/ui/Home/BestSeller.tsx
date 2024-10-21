import ProductCard2 from '../Product/ProductCard2';

export default function BestSeller() {
  return (
    <section className="pb-11" id="bestseller">
      <div className="flex flex-col justify-center items-center pb-11">
        <h3 className="capitalize">Our best sellers</h3>
        <a href="" className="body1">
          view more
        </a>
      </div>
      <div className="overflow-hidden mx-8">
        <div className="w-full overflow-x-auto no-scrollbar h-fit snap-x">
          <div className="flex space-x-4 h-fit flex-grow">
            <ProductCard2 img="/image/img9.jpeg" />
            <ProductCard2 />
            <ProductCard2 img="/image/img12.webp" />
            <ProductCard2 img="/image/img10.jpeg" />
            <ProductCard2 img="/image/img11.webp" />
            <ProductCard2 img="/image/img1.png" />
          </div>
        </div>
      </div>
    </section>
  );
}
