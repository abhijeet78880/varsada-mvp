import Home from './components/pages/Home';
import Login from './components/pages/Login';
import BestSeller from './components/ui/Home/BestSeller';
import Category from './components/ui/Home/Category';
import Footer from './components/ui/Layout/Footer';
import Navbar from './components/ui/Layout/Navbar';
import SafeArea from './components/ui/Layout/SafeArea';
import Trending from './components/ui/Home/Trending';
import { useUserStore } from './store/useStore';
import './utils.css';

export default function App() {
  const { isLogedIn, isLoginSkipped } = useUserStore();

  return (
    <SafeArea>
      <Navbar />
      {!isLogedIn || isLoginSkipped ? <Login /> : <Home />}
      <Category />
      <Trending />
      <BestSeller />
      <Footer />
    </SafeArea>
  );
}
