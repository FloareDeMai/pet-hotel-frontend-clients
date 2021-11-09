import { useHistory } from "react-router-dom";
import HotelService from "../services/hotel.service";

function FiltersBar() {
 let history = useHistory();

 const getHotelsWithVet = async () => {
   await HotelService.getAllPetHotelsWithVet().then((data) => {
     history.push({
       pathname: "/results",
       state: { hotels: data.data },
     });
   });
 };

 const getAllHotels = async () => {
   await HotelService.getAllPetHotels().then((data) => {
     
     history.push({
       pathname: "/results",
       state: { hotels: data.data },
     });
   });
 };

 const getAllHotelsByRoomType = async () => {
   await HotelService.getAllPetHotelsByRoomType().then((data) => {
     console.log(data.data);
     history.push({
       pathname: "/results",
       state: { hotels: data.data },
     });
   });
 };
  return (
    <div className="flex mt-4 items-center">
      <button
        className="flex mr-6 hover-filters "
        type="submit"
        onClick={getAllHotels}
      >
        <img
          src="../../images/pet-house.png"
          alt="pethouse"
          objectfit="contain"
          objectposition="left"
          className="h-6 mr-1"
        />
        <h1 className="text-2xl text-right" style={{ fontFamily: "Raleway" }}>
          Hotels
        </h1>
      </button>
      <div className="flex mr-6 hover-filters">
        <img
          src="../../images/dog.png"
          alt="pethouse"
          objectfit="contain"
          objectposition="left"
          className="h-6"
        />
        <button
          className="text-2xl text-right"
          style={{ fontFamily: "Raleway" }}
          onClick={getAllHotelsByRoomType}
        >
          For dogs
        </button>
      </div>
      <div className="flex mr-6 hover-filters">
        <img
          src="../../images/cat.png"
          alt="pethouse"
          objectfit="contain"
          objectposition="left"
          className="h-6"
        />
        <button
          className=" text-2xl text-right"
          style={{ fontFamily: "Raleway" }}
        >
          For cats
        </button>
      </div>
      <div className="flex mr-6 hover-filters">
        <img
          src="../../images/fences.png"
          alt="pethouse"
          objectfit="contain"
          objectposition="left"
          className="h-6 mr-1"
        />
        <button
          className="text-2xl text-right"
          style={{ fontFamily: "Raleway" }}
        >
          With a garden
        </button>
      </div>
      <div className="flex mr-6 hover-filters">
        <img
          src="../../images/veterinarian.png"
          alt="pethouse"
          objectfit="contain"
          objectposition="left"
          className="h-6 mr-1"
        />
        <button
          className="text-2xl text-right"
          style={{ fontFamily: "Raleway" }}
          onClick={getHotelsWithVet}
        >
          Has veterinary
        </button>
      </div>
    </div>
  );
}

export default FiltersBar;
