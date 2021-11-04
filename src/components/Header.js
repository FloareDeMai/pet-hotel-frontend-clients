import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Menu, Dropdown, Button } from "antd";
import { useAtom } from "jotai";
import { userAtom } from "../App";


function Header() {
const [userLogged, setUserLogged] = useAtom(userAtom);
console.log(userLogged);

let history = useHistory();


  const handleLogOut = () => {
    AuthService.logout();
    history.push("/login");
    setUserLogged(false);
    
  };

  return (
    <nav
      className="flex justify-between items-center h-20 bg-white shadow-md text-gray-600  sticky top-0 z-50"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        <img
          alt="logo"
          className="rounded-full h-14"
          src="https://img2.pngio.com/pet-logo-logodix-pet-logo-png-800_600.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </Link>
      <div className="px-4 cursor-pointer md:hidden hover-links">
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block  hidden">
        <Link to="/" className="p-4 hover-links">
          Home
        </Link>
        <Link to="/hotels" className="p-4 hover-links">
          Hotels
        </Link>
        <Link to="/" className="p-4 hover-links">
          Profile
        </Link>
        {userLogged ? (
          <Button onClick={handleLogOut}>Log out</Button>
        ) : (
          <Link to="/login" className="p-4 hover-links">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;


