import { Link, useHistory } from "react-router-dom";
import AuthService from "../services/auth.service";
import { Menu, Dropdown, Button } from "antd";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchCalendar from "./SearchCalendar";

function Header() {
  const [userLogged, setUserLogged] = useAtom(userAtom);
  console.log(userLogged);

  let history = useHistory();

  const handleLogOut = () => {
    AuthService.logout();
    history.push("/");
    setUserLogged(false);
  };

 

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <nav
        className="flex justify-between items-center h-20 bg-white shadow-md text-gray-600  sticky top-0 z-50 text-lg font-medium"
        role="navigation"
      >
        <Link to="/" className="pl-2 md:pl-8">
          <img
            alt="logo"
            className="rounded-full h-14"
            src="https://img2.pngio.com/pet-logo-logodix-pet-logo-png-800_600.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </Link>
        <div class="relative text-gray-600 ">
          <input
            type="search"
            name="serch"
            placeholder="City"
            class=" bg-white  h-10 px-5 pr-10 rounded-full text-sm focus:outline-none border-2 border-gray-300"
          />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg
              className="h-4 w-4 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="pr-2 md:px-4 cursor-pointer md:hidden hover-links">
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
            <button
              className="hover-links text-lg font-medium"
              onClick={handleLogOut}
            >
              Log out
            </button>
          ) : (
            <Link to="/login" className="p-4 hover-links text-lg font-medium">
              Login
            </Link>
          )}
        </div>
      </nav>
      <SearchCalendar/>
    </>
  );
}

export default Header;
