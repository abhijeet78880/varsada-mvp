import { Rate } from 'antd';
import ProductHeading from './ProductHeading';
import ProductImages from './ProductImages';
import ProductPrice from './ProductPrice';
import ProductSizeBox from './ProductSizeBox';
import ProductColor from './ProductColor';
import ProductBuyButtons from './ProductBuyButtons';

export default function ProductDesc() {
  return (
    <section className="p-11 w-full">
      <div className="grid grid-cols-2 gap-11">
        <ProductImages />

        <div className="flex flex-col gap-2">
          <ProductHeading />
          <div className="flex gap-4">
            <Rate disabled defaultValue={3} />
            <span>126</span>
          </div>
          <ProductPrice price="2000" />
          <div className="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatem, odit? Maxime quae consectetur odio alias voluptatibus
            nisi quam quisquam totam tempora eum, enim provident molestias
            aperiam omnis, eveniet delectus distinctio.
          </div>
          <ProductSizeBox />
          <ProductColor />
          <ProductBuyButtons />
        </div>
      </div>
    </section>
  );
}
