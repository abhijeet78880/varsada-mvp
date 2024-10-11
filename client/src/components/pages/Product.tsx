import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProductDesc from "../ui/ProductDesc";
import SafeArea from "../ui/SafeArea";
import SimilarProduct from "../ui/SimilarProduct";

export default function Product() {
  return (
    <SafeArea>
      <Navbar />
      <ProductDesc />
      <SimilarProduct />
      <Footer />
    </SafeArea>
  )
}