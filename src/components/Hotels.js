import { useState, useEffect } from "react";
import HotelService from "../services/hotel.service";
import HotelCard from "./HotelCard";
import FiltersBar from "./FiltersBar";
import axios from "axios";
import {useAtom} from 'jotai';
import {filterHotelsAtom} from '../App'

function Hotels() {
  const [hotels, setHotels] = useAtom(filterHotelsAtom);
  const [isLoading, setIsLoading] = useState(true);

  const getHotelsWithVet = async() => {
   await axios
      .get("http://localhost:8080/api/pet-hotel/has-veterinary")
      .then((data) => setHotels(data.data));
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
      <FiltersBar getHotelsWithVet={getHotelsWithVet} />

      <div className="flex flex-wrap -mx-4">
        {hotels.map((hotel) => {
          return <HotelCard key={hotel.id} hotel={hotel} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;
