import axios from "axios";


const API_URL = "http://localhost:8080/api/pet-hotel/available";


const searchAvailableHotels = async (searchRequest) => {
    return await axios.get(API_URL, {
        params: {
            cityName: searchRequest.cityName,
            startDate: searchRequest.startDate,
            endDate: searchRequest.endDate,
            
        }
    });
}

const SearchService = {
    searchAvailableHotels
}

export default SearchService;
