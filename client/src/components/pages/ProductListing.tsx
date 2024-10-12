import Footer from '../ui/Layout/Footer';
import Navbar from '../ui/Layout/Navbar';
import SafeArea from '../ui/Layout/SafeArea';
import Filter from '../ui/ProductList/Filter/Filter';
import ProductList from '../ui/ProductList/ProductList';
import ProductListFilterHeader from '../ui/ProductList/ProductListFilterHeader';
import ProductListNav from '../ui/ProductList/ProductListNav';

export default function ProductListing() {
  return (
    <SafeArea>
      <Navbar />
      <div className="w-full p-11">
        <ProductListNav />
        <ProductListFilterHeader />
        <div className="grid transition-all grid-cols-[30%_70%] gap-8 my-4">
          <Filter />
          <ProductList />
        </div>
      </div>
      <Footer />
    </SafeArea>
  );
}
