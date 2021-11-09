import axios from "axios";

const API_URL = "http://localhost:8080/api/pet-hotel"


const getAllPetHotels = async () => {
    return await axios.get(API_URL + "/all-hotels");
}

const getAllPetHotelsByRoomType = async () => {
  return await axios.get(API_URL + "/room-type");
};

const getAllPetHotelsWithVet = async () => {
  return await axios.get(API_URL + "/has-veterinary");
};

const HotelService = {
    getAllPetHotels,
    getAllPetHotelsByRoomType,
    getAllPetHotelsWithVet
}

export default HotelService;