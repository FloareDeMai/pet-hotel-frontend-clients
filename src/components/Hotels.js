import { useState, useEffect } from "react";
import HotelService from "../services/hotel.service";
import HotelCard from "./HotelCard";
import FiltersBar from "./FiltersBar";
import axios from "axios";
import { useAtom } from "jotai";
import { filterHotelsAtom } from "../App";
import {  useHistory } from "react-router-dom";

function Hotels() {
  const [hotels, setHotels] = useAtom(filterHotelsAtom);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();

  const getHotelsWithVet = async () => {
    await HotelService.getAllPetHotelsWithVet()
      .then((data) => {
        setHotels(data.data);
        history.push({
          pathname: "/results",
          state: {hotels: data.data}
        })
      });
  };

  const getAllHotels = async () => {
    await HotelService.getAllPetHotels()
      .then((data) => {
        setHotels(data.data);
        history.push({
          pathname: "/results",
          state: { hotels: data.data },
        });
      });
  }

    const getAllHotelsByRoomType = async () => {
      await HotelService.getAllPetHotelsByRoomType().then((data) => {
        setHotels(data.data);
        history.push({
          pathname: "/results",
          state: { hotels: data.data },
        });
      });
    };


  useEffect(() => {
    HotelService.getAllPetHotels()
      .then((data) => {
        setHotels(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setHotels]);

  return (
    <div className="container mx-auto">
      <FiltersBar getHotelsWithVet={getHotelsWithVet} getAllHotels={getAllHotels}/>

      <div className="flex flex-wrap -mx-4">
        {hotels.map((hotel) => {
          return <HotelCard key={hotel.id} hotel={hotel} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;
