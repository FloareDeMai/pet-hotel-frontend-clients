import axios from "axios";
import qs from "qs";

const API_URL = "http://localhost:8080/api/pet-hotel";

const getAllPetHotels = async (filterParam) => {
  return await axios.get(API_URL + "/filter", {
    params: {
      filterParam: filterParam
    },
    paramsSerializer: params => {
      return qs.stringify(params, {arrayFormat: "repeat"})
    }
    });
};

const getAllPetHotelsByFilterType = async (filterParam) => {
  return await axios.get(API_URL + "/filter", {
    params: {
      filterParam: filterParam
    },
    paramsSerializer: params => {
      return qs.stringify(params, {arrayFormat: "repeat"})
    }
  });
};

const getAllPetHotelsByRoomTypeCat = async (filterParam) => {
  return await axios.get(API_URL + "/filter", {
    params: {
      filterParam:filterParam,
    },
    paramsSerializer: params => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    }
  });
};

const getAllPetHotelsWithGarden = async (filterParam) => {
  return await axios.get(API_URL + "/filter", {
    params: {
      filterParam: filterParam,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
};

const getAllPetHotelsWithVet = async () => {
  return await axios.get(API_URL + "/has-veterinary");
};

const HotelService = {
  getAllPetHotels,
  getAllPetHotelsByFilterType,
  getAllPetHotelsByRoomTypeCat,
  getAllPetHotelsWithGarden,
  getAllPetHotelsWithVet,
};

export default HotelService;
