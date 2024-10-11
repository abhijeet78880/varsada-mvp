import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import BestSeller from "./components/ui/BestSeller";
import Category from "./components/ui/Category";
import Navbar from "./components/ui/Navbar";
import Trending from "./components/ui/Trending";
import { useUserStore } from "./store/useStore";
import "./utils.css"

export default function App() {
  const { isLogedIn, isLoginSkipped } = useUserStore();

  return (
    <main className="overflow-x-hidden w-[100dvw] h-[100dvh]">
        <div className="mx-auto max-w-[1440px] overflow-x-hidden">
          <Navbar />
          {(!isLogedIn || isLoginSkipped) ? <Login /> : <Home />}
          <Category />
          <Trending/>
          <BestSeller/>
        </div>
    </main>
  )
}