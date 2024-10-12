import Address from '../ui/Checkout/Address';
import ConfirmProduct from '../ui/Checkout/ConfirmProduct';
import PaymentInformation from '../ui/Checkout/PaymentInformation';
import Footer from '../ui/Layout/Footer';
import Navbar from '../ui/Layout/Navbar';
import SafeArea from '../ui/Layout/SafeArea';
import Tabs from '../ui/Layout/Tabs';

export default function Checkout() {
  const tabs = [
    {
      name: 'Confrim Product',
      component: <ConfirmProduct />,
    },
    {
      name: 'Address',
      component: <Address />,
    },
    {
      name: 'Payment Information',
      component: <PaymentInformation />,
    },
  ];
  return (
    <SafeArea>
      <Navbar />
      <div className="w-full h-[50vh] flex justify-center items-center  bg-cover text-white bg-img">
        <h3 className="capitalize">View Varsada Bag</h3>
      </div>
      <div className="w-full p-11">
        <Tabs tabs={tabs} gap={'between'} />
      </div>
      <Footer />
    </SafeArea>
  );
}
