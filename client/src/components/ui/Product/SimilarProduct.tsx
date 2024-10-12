import ProductCard2 from './ProductCard2';

export default function SimilarProduct() {
  return (
    <section className="p-11">
      <h4 className="text-3xl">Similar Items</h4>
      <div className="grid grid-cols-3 mt-8 gap-8">
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </div>
    </section>
  );
}
