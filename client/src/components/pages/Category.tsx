import { Breadcrumb } from 'antd';
import Footer from '../ui/Layout/Footer';
import Navbar from '../ui/Layout/Navbar';
import SafeArea from '../ui/Layout/SafeArea';
import { Link } from 'react-router-dom';
import SideNav from '../ui/Category/SideNav';
import CategoryProductList from '../ui/Category/CategoryProductList';

export default function Category() {
  return (
    <SafeArea>
      <Navbar />
      <div className="w-full p-11">
        <Breadcrumb
          items={[{ title: <Link to="/">Home</Link> }, { title: 'Category' }]}
        />
        <div className="grid transition-all grid-cols-[30%_70%] gap-8 my-4">
          <SideNav />
          <CategoryProductList />
        </div>
      </div>
      <Footer />
    </SafeArea>
  );
}
