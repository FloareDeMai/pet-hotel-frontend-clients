import axios from "axios";

const API_URL = "http://localhost:8080/api/pet-hotel"


const getAllPetHotels = async () => {
    return await axios.get(API_URL + "/all-hotels");
}

const HotelService = {
    getAllPetHotels
}

export default HotelService;