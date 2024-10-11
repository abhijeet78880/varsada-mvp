import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import BestSeller from "./components/ui/BestSeller";
import Category from "./components/ui/Category";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import SafeArea from "./components/ui/SafeArea";
import Trending from "./components/ui/Trending";
import { useUserStore } from "./store/useStore";
import "./utils.css"

export default function App() {
  const { isLogedIn, isLoginSkipped } = useUserStore();

  return (
    <SafeArea>
      <Navbar />
      {(!isLogedIn || isLoginSkipped) ? <Login /> : <Home />}
      <Category />
      <Trending />
      <BestSeller />
      <Footer />
    </SafeArea>
  )
}