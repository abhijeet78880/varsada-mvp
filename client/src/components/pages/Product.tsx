import Footer from '../ui/Layout/Footer';
import Navbar from '../ui/Layout/Navbar';
import ProductDesc from '../ui/Product/ProductDesc';
import SafeArea from '../ui/Layout/SafeArea';
import SimilarProduct from '../ui/Product/SimilarProduct';

export default function Product() {
  return (
    <SafeArea>
      <Navbar />
      <ProductDesc />
      <SimilarProduct />
      <Footer />
    </SafeArea>
  );
}
