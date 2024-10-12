import Footer from '../ui/Layout/Footer';
import Navbar from '../ui/Layout/Navbar';
import SafeArea from '../ui/Layout/SafeArea';
import DreamListNav from '../ui/DreamList/DreamListNav';
import ProductList from '../ui/ProductList/ProductList';

export default function DreamList() {
  return (
    <SafeArea>
      <Navbar />
      <div className="w-full p-11">
        <DreamListNav />
        <div className="my-4">
          <ProductList />
        </div>
      </div>
      <Footer />
    </SafeArea>
  );
}
