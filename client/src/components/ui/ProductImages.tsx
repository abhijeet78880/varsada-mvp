import { Breadcrumb, Image } from "antd";
import { Link } from "react-router-dom";

export default function ProductImages() {
  return (
    <div>
          <Breadcrumb
            items={[{title: <Link to="/">Home</Link>,},{title: "Product Description",},]}
          />
          <div className="h-[calc(100dvh-200px)] mt-2 overflow-y-auto no-scrollbar">
            <div className="w-full">
              <Image
                src='/image/img2.jpeg'
              />
              <Image
                src='/image/img2.jpeg'
              />
              <Image
                src='/image/img2.jpeg'
              />
              <Image
                src='/image/img2.jpeg'
              />
            </div>
          </div>
        </div>
  )
}