import { useHistory } from "react-router-dom";
import HotelService from "../services/hotel.service";
import { useState } from "react";

function FiltersBar() {
  let history = useHistory();

  let filterParams = JSON.parse(localStorage.getItem("filters"));
 


  const getAllHotels = async () => {
    localStorage.setItem("filters", JSON.stringify([]));
    await HotelService.getAllPetHotels().then((data) => {
      history.push({
        pathname: "/results",
        state: { hotels: data.data },
      });
    });
    
    
  };

  const getAllPetHotelsByFilterType = async (param) => {
   
    if (filterParams.indexOf(param) > -1) {
      filterParams.splice(filterParams.indexOf(param), 1);
       localStorage.setItem("filters", JSON.stringify(filterParams));
       
       await HotelService.getAllPetHotelsByFilterType(filterParams).then(
         (data) => {
           history.push({
             pathname: "/results",
             state: { hotels: data.data },
           });
         }
       );
    } else {
      filterParams.push(param);
      localStorage.setItem("filters", JSON.stringify(filterParams));
      await HotelService.getAllPetHotelsByFilterType(filterParams).then(
        (data) => {
          history.push({
            pathname: "/results",
            state: { hotels: data.data },
          });
        }
      );
    }
  };

  

  return (
    <div className="flex mt-4 items-center">
      {filterParams.length === 0 ? (
        <button
          className="flex mr-6 active-button"
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
      ) : (
        <button
          className="flex mr-6 hover-filters"
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
      )}

      {filterParams.indexOf("DOGS") > -1 ? (
        <div className="flex mr-6 active-button">
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
            onClick={() => getAllPetHotelsByFilterType("DOGS")}
          >
            For dogs
          </button>
        </div>
      ) : (
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
            onClick={() => getAllPetHotelsByFilterType("DOGS")}
          >
            For dogs
          </button>
        </div>
      )}

      {filterParams.indexOf("CATS") > -1 ? (
        <div className="flex mr-6 active-button">
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
            onClick={() => getAllPetHotelsByFilterType("CATS")}
          >
            For cats
          </button>
        </div>
      ) : (
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
            onClick={() => getAllPetHotelsByFilterType("CATS")}
          >
            For cats
          </button>
        </div>
      )}

      {filterParams.indexOf("GARDEN") > -1 ? (
        <div className="flex mr-6 active-button">
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
            onClick={() => getAllPetHotelsByFilterType("GARDEN")}
          >
            With a garden
          </button>
        </div>
      ) : (
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
            onClick={() => getAllPetHotelsByFilterType("GARDEN")}
          >
            With a garden
          </button>
        </div>
      )}
      {filterParams.indexOf("VET") > -1 ? (
        <div className="flex mr-6 active-button">
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
            onClick={() => getAllPetHotelsByFilterType("VET")}
          >
            Has veterinary
          </button>
        </div>
      ) : (
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
            onClick={() => getAllPetHotelsByFilterType("VET")}
          >
            Has veterinary
          </button>
        </div>
      )}
    </div>
  );
}

export default FiltersBar;
