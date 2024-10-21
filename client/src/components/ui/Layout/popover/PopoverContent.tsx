import { Link } from 'react-router-dom';

export default function PopoverContent() {
  return (
    <>
      <div>
        <ul>
          <Link to={'/checkout'}>
            <li>
              <span className="p-2">MY Order</span>
            </li>
          </Link>
          <Link to="/dreamlist">
            <li>
              <span className="p-2">Dream List</span>
            </li>
          </Link>
          <Link to="/coinactivity">
            <li>
              <span className="p-2">Coins Activity</span>
            </li>
          </Link>
          <li>
            <span className="p-2">Varsada Wallet</span>
          </li>
          <li>
            <span className="p-2">Saved Address</span>
          </li>
          <li>
            <span className="p-2">About Us</span>
          </li>
          <li>
            <span className="p-2">Customer Service</span>
          </li>
          <li>
            <span className="p-2">Replacement Policy</span>
          </li>
          <li>
            <span className="p-2">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
}
