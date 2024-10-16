import CoinCredited from '../ui/coinActivity/CoinCredited';
import CoinsReedemed from '../ui/coinActivity/CoinsReedemed';
import Navbar from '../ui/Layout/Navbar';
import Tabs from '../ui/Layout/Tabs';

export default function CoinActivity() {
  const Tab = [
    { name: 'CoinCredited', component: <CoinCredited /> },
    { name: 'Coins Reedemed', component: <CoinsReedemed /> },
  ];
  return (
    <>
      <Navbar />
      <Tabs tabs={Tab} gap={3} />
    </>
  );
}
