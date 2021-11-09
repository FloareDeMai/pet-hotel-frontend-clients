import HotelCard from "./HotelCard";
import { Empty } from "antd";
import FiltersBar from "./FiltersBar";
import axios from "axios";
import { useAtom } from "jotai";
import { filterHotelsAtom } from "../App";
import { useState, useEffect } from "react";

function SearchResults(props) {
  
  const [hotels, setHotels] = useAtom(filterHotelsAtom);
  const [isLoading, setIsLoading] = useState(true);
  
  //  let availableHotels = props.location.state.hotels;

  const getHotelsWithVet = async() => {
    await axios
      .get("http://localhost:8080/api/pet-hotel/has-veterinary")
      .then((data) => {
        setHotels(data.data);
        
       
      });
  };


 
  //   if (availableHotels.length === 0) {
  //     return (
  //       <div className="flex justify-center items-center md:mt-20">
  //         <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  //       </div>
  //     );
  //   }

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

export default SearchResults;
