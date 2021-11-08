import HotelCard from "./HotelCard"
import { Empty } from "antd";

function SearchResults(props) {
    let availableHotels = props.location.state.hotels;
    if(availableHotels.length === 0){
        return (
         
            <div className="flex justify-center items-center md:mt-20">
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            </div>
         
        );
    }

    return (
      <div className="container mx-auto">
        <div className="mt-4 flex">
          <h1 className="border-2 p-2 rounded-full">Filters</h1>
        </div>

        <div className="flex flex-wrap -mx-4">
          {availableHotels.map((hotel) => {
            return <HotelCard key={hotel.id} hotel={hotel} />;
          })}
        </div>
      </div>
    );
}

export default SearchResults
