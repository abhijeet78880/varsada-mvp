import { Link, useNavigate } from 'react-router-dom';
import { Heart, Search, Bag, Profile } from '../../../assets/icons';
import logo from '../../../assets/logo.svg';
import { Popover } from 'antd';
import PopoverProfile from './popover/PopoverProfile';
import PopoverContent from './popover/PopoverContent';
import { useState } from 'react';

export default function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [serachString, setSearchString] = useState('');
  const navigate = useNavigate();

  const handelSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  return (
    <nav className="px-8 py-4 flex justify-between items-center">
      <div className="">
        <img src={logo} alt="" />
      </div>
      <ul className="flex gap-6 font-bold capitalize subtitle2 justify-center items-center">
        <li>
          <a href="http://localhost:5173/#trending">new in</a>
        </li>
        <li>
          <a href="http://localhost:5173/#bestseller">Best seller</a>
        </li>
        <li>
          <a href="http://localhost:5173/#category">category</a>
        </li>
      </ul>
      <ul className="flex gap-6 capitalize caption">
        {/* <li className="flex flex-col justify-center items-center">
          <Search />
          search
        </li> */}
        {/* <input type="search" name="" id="" className='px-4 body1 border rounded-full' placeholder='Search'/> */}
        {isSearchActive ? (
          <div className="relative">
            <input
              type="search"
              name=""
              id=""
              className="px-4 body1 border rounded-full h-full"
              placeholder="Search"
              onInput={handelSearchInput}
            />
            <button
              className="absolute top-2 right-4 opacity-40"
              onClick={() => navigate(`../productlist?search=${serachString}`)}
            >
              <Search />
            </button>
          </div>
        ) : (
          <button
            className="flex flex-col justify-center items-center"
            onClick={() => setIsSearchActive(!isSearchActive)}
          >
            <Search />
            search
          </button>
        )}
        <Link to={'/checkout'}>
          <li className="flex flex-col justify-center items-center">
            <Bag />
            varsada bag
          </li>
        </Link>
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
          <li className="flex flex-col justify-center items-center cursor-pointer">
            <Profile />
            profile
          </li>
        </Popover>
      </ul>
    </nav>
  );
}
