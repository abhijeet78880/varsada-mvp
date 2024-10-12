import logo from '../../../assets/logo.svg';

export default function Footer() {
  return (
    <footer className="text-white pt-11">
      <div className="flex gap-4 justify-between w-full bg-black p-8">
        <div className="flex">
          <img src={logo} alt="" className="invert" />
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-2xl font-bold tracking-wide">Exclusive</h5>
          <h5 className="text-xl font-semibold">Subscribe</h5>
          <p className="body1 font-[400]">Get 10% off on your first order</p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="p-2 bg-transparent border-2 border-white rounded-md"
          />
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Subscribe</h5>
          <p className="body1 font-[400] leading-6">Varsada</p>
          <p className="body1 font-[400] leading-6">exclusive@gmail.com</p>
          <p className="body1 font-[400] leading-6">+4545-43534-53453</p>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">About Us</h5>
          <p className="body1 font-[400] leading-6">News</p>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Get Help</h5>
          <p className="body1 font-[400] leading-6">Shipping</p>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold">Let's get Social</h5>
          <div className="flex gap-2">
            <div>F</div>
            <div>F</div>
            <div>F</div>
            <div>F</div>
          </div>
        </div>
      </div>
      <div>
        <ul className="flex justify-end w-full bg-black capitalize gap-4 p-4">
          <li>privacy</li>
          <li>privacy</li>
          <li>privacy</li>
          <li>privacy</li>
        </ul>
      </div>
      <div className="p-4">
        <p className="text-center text-black">
          {' '}
          © {new Date().getFullYear()} VARSADA, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
