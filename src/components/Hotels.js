import { useState, useEffect } from "react";
import HotelService from "../services/hotel.service";
import HotelCard from "./HotelCard";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    HotelService.getAllPetHotels()
      .then((data) => {
        setHotels(data.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap -mx-4">
        {hotels.map((hotel) => {
          return <HotelCard key={hotel.id} hotel={hotel} />;
        })}
      </div>
    </div>
  );
}

export default Hotels;
