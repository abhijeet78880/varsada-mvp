import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Navbar from './components/ui/Layout/Navbar';
import SafeArea from './components/ui/Layout/SafeArea';
import { useUserStore } from './store/useStore';
import './utils.css';

export default function App() {
  const { isLogedIn, isLoginSkipped } = useUserStore();

  return (
    <SafeArea>
      <Navbar />
      {isLogedIn || isLoginSkipped ? <Home /> : <Login /> }
    </SafeArea>
  );
}
