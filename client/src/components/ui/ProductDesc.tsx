import { Rate } from "antd"
import ProductHeading from "./ProductHeading"
import ProductImages from "./ProductImages"
import ProductPrice from "./ProductPrice"
import ProductSizeBox from "./ProductSizeBox"

export default function ProductDesc() {
  return (
    <section className="p-11 w-full">
      <div className="grid grid-cols-2 gap-11">
        <ProductImages />

        <div>
          <ProductHeading />
          <div className="flex gap-4">
            <Rate disabled defaultValue={2} />
            <span>126</span>
          </div>
          <ProductPrice />
          <div className="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, odit? Maxime quae consectetur odio alias voluptatibus nisi quam quisquam totam tempora eum, enim provident molestias aperiam omnis, eveniet delectus distinctio.
          </div>
          <ProductSizeBox />
        </div>

      </div>
    </section>
  )
}