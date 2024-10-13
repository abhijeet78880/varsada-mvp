import { Profile } from '../../../../assets/icons';
import { useUserStore } from '../../../../store/useStore';
import { Link } from 'react-router-dom';

export default function PopoverProfile() {
  const { isLogedIn } = useUserStore();
  return (
    <Link to="/profile">
      <div className="sm:w-[250px]">
        <div className="flex gap-x-7 align-middle p-0">
          <Profile />
          <div className="flex flex-col gap-y-0 -m-2 p-0">
            <span>{isLogedIn ? 'userName' : 'login'}</span>
            <span className="-m-1">xyz@gmail.com</span>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </Link>
  );
}
