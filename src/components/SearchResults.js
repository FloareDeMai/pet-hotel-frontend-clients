import HotelCard from "./HotelCard";
import FiltersBar from "./FiltersBar";
import { useState, useEffect } from "react";

function SearchResults(props) {
  let hotels = props.location.state.hotels;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="container mx-auto">
      <FiltersBar />
      <div className="flex flex-wrap -mx-4">
        {hotels.map((hotel) => {
          return <HotelCard key={hotel.id} hotel={hotel} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
