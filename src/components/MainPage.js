import { Link, useHistory } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../App";
import HotelService from "../services/hotel.service";

function MainPage() {
  const [userLogged, setUserLogged] = useAtom(userAtom);
  let history = useHistory();

  localStorage.setItem("filters", JSON.stringify([]));

  const getAllHotels = async () => {
    await HotelService.getAllPetHotels().then((data) => {
      history.push({
        pathname: "/results",
        state: { hotels: data.data },
      });
    });
  };

  return (
    <div className="flex flex-shrink sm:flex-row flex-col">
      <div className="flex flex-1 flex-col justify-center p-3.5 min-w-0 md:mx-20">
        <h2 className="object-cover text-gray-800 font-extrabold text-4xl mb-5 ">
          <span className="text-yellow-600">PET</span>{" "}
          <span className="text-purple-600">HOTELS</span>
        </h2>
        <p className="text-gray-600 text-justify mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        {userLogged ? (
          <div className="flex items-center space-x-6">
           
              <button className="text-lg py-1 w-40 rounded-full border-2 border-yellow-600 my-2 hover:bg-yellow-600 font-semibold text-purple-800" onClick={getAllHotels}>
                Explore
              </button>
            
          </div>
        ) : (
          <div className="flex items-center space-x-6 ">
            <Link to={{ pathname: "/register" }}>
              <button
                type="text"
                className="p-2 rounded-full border-2 border-yellow-600 my-2 hover:bg-yellow-600 font-semibold text-purple-800"
              >
                Become a Client
              </button>
            </Link>
            <Link to={{ pathname: "/login" }}>
              <button
                type="text"
                className="p-2 rounded-full border-2 border-yellow-600 my-2 hover:bg-yellow-600 font-semibold text-purple-800"
              >
                Login into account
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-1">
        <img
          alt="cat and dog in a house"
          className="object-cover overflow-hidden rounded-tl-2xl rounded-bl-2xl"
          src="https://image.freepik.com/vecteurs-libre/chien-chat-animal-maison-logo-icone-illustration_7688-1444.jpg"
        />
      </div>
    </div>
  );
}

export default MainPage;
