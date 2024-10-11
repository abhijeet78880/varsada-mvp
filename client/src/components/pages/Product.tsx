import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import ProductDesc from "../ui/ProductDesc";
import SafeArea from "../ui/SafeArea";

export default function Product() {
  return (
    <SafeArea>
      <Navbar />
      <ProductDesc />
      <Footer />
    </SafeArea>
  )
}