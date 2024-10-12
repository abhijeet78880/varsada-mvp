import Footer from '../ui/Layout/Footer';
import Navbar from '../ui/Layout/Navbar';
import ProductDesc from '../ui/ProductDescription/ProductDesc';
import SafeArea from '../ui/Layout/SafeArea';
import SimilarProduct from '../ui/ProductDescription/SimilarProduct';

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
