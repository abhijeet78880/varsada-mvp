import { Link } from 'react-router-dom';
import { Heart, Search, Bag, Profile } from '../../../assets/icons';
import logo from '../../../assets/logo.svg';
import { Popover } from 'antd';
import PopoverProfile from './popover/PopoverProfile';
import PopoverContent from './popover/PopoverContent';

export default function Navbar() {
  return (
    <nav className="px-8 py-4 flex justify-between items-center">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <ul className="flex gap-6 font-bold capitalize subtitle2 justify-center items-center">
        <li>new in</li>
        <li>best seller</li>
        <li>category</li>
      </ul>
      <ul className="flex gap-6 capitalize caption">
        <li className="flex flex-col justify-center items-center">
          <Search />
          search
        </li>
        <li className="flex flex-col justify-center items-center">
          <Bag />
          varsada bag
        </li>
        <Link to="/dreamlist">
          <li className="flex flex-col justify-center items-center">
            <Heart />
            dreamlist
          </li>
        </Link>
        <Popover
          placement="bottomRight"
          trigger="hover"
          title={<PopoverProfile />}
          content={<PopoverContent />}
          style={{ borderRadius: '4px' }}
        >
          <li className="flex flex-col justify-center items-center">
            <Profile />
            profile
          </li>
        </Popover>
      </ul>
    </nav>
  );
}
