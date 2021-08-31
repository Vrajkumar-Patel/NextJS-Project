import headerLogo from "../assets/logo.png";
import Image from "next/image";
import Button from "./Button";

function Header() {
  return (
    <div className="w-full px-10 py-4" style={{height: '10%', minHeight:'10%' }} >
      <div className="flex justify-between">
        <Image
          src={headerLogo}
          alt="Header Logo"
          width="150.89"
          height="64.89"
        />
        <ul
          className="flex items-center font-bold"
          style={{ fontFamily: "'Raleway', sans-serif !important", color: '#254CAC' }}
        >
          <li className="mr-10 tracking-wider">Home</li>
          <li className="mr-10 tracking-wider">About Us</li>
          <li className="mr-10 tracking-wider">Premium</li>
          <li className="mr-10 tracking-wider">Blogs</li>
          <li>
            <Button buttonType='secondary' className='px-10 py-3 border-2 rounded-full font-bold tracking-wider' style={{borderColor: '#ED6D2E', color: '#ED6D2E' }}>Get Started</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
