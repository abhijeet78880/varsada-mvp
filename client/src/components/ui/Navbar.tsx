import { Heart, Search, Bag, Profile } from "../../assets/icons"
import logo from '../../assets/logo.svg'

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
        <li className="flex flex-col justify-center items-center">
          <Heart />
          dreamlist
        </li>
        <li className="flex flex-col justify-center items-center">
          <Profile />
          profile
        </li>
      </ul>
    </nav>
  )
}