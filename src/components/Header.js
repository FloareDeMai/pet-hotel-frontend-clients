import { Link } from "react-router-dom";

function Header() {
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
      <div className="pr-8 md:block  hidden ">
        <Link to="/" className="p-4 hover-links">
          Home
        </Link>
        <Link to="/hotels" className="p-4 hover-links">
          Hotels
        </Link>
        <Link to="/" className="p-4 hover-links">
          Profile
        </Link>
        <Link to="/" className="p-4 hover-links">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Header;

//   <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
//     {/* Left */}
//     <div className="relative flex items-center h-14 cursor-pointer my-auto">
// <img
//   alt="logo"
//   className="rounded-full h-14"
//   src="https://img2.pngio.com/pet-logo-logodix-pet-logo-png-800_600.png"
//   layout="fill"
//   objectFit="contain"
//   objectPosition="left"
// />
//     </div>
//     {/* Center */}
//     <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm text-gray-600 placeholder-gray-400">
//       <input
//         className="flex-grow pl-5 bg-transparent outline-none text-sm"
//         type="text"
//         placeholder="Start your search"
//       />
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="hidden lg:inline-flex h-8 bg-yellow-600 text-white rounded-full p-2 cursor-pointer md:mx-2"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//         />
//       </svg>
//     </div>

//     {/* Right */}
//     <div className="flex items-center space-x-4 justify-end text-gray-500">
//       <p className="hidden md:inline cursor-pointer hover:text-yellow-600">Use as Hotel Owner</p>

//       <div className="flex items-center space-x-2 border-2 p-2 rounded-full border-yellow-600 md:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//           />
//         </svg>
//       </div>
//     </div>
//   </header>
