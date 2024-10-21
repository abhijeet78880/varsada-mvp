import ProductCard1 from '../Product/ProductCard1';

type Prop = {
  isShowFilters: boolean;
};

export default function ProductList({ isShowFilters }: Prop) {
  return (
    <div
      className={`grid ${isShowFilters ? 'grid-cols-3' : 'grid-cols-4'} gap-4`}
    >
      <ProductCard1 />
      <ProductCard1 img="/image/img9.jpeg" />
      <ProductCard1 />
      <ProductCard1 img="/image/img9.webp" />
      <ProductCard1 />
      <ProductCard1 img="/image/img15.webp" />
      <ProductCard1 />
      <ProductCard1 img="/image/img12.webp" />
      <ProductCard1 />
      <ProductCard1 />
      <ProductCard1 img="/image/img10.jpeg" />
      <ProductCard1 />
    </div>
  );
}
