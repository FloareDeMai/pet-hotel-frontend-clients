import axios from "axios";


const API_URL = "http://localhost:8080/api/auth";

const register =  (registerForm) => {
    console.log(registerForm);
    return axios.post(API_URL + "/signupCustomer", registerForm);
}

const login = async (loginForm) => {
   
    const response = await axios.post(API_URL + "/login",  loginForm );
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.token));
    }
    return response.data;
}


const logout = () => {
  console.log("logout");
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  addUserToLocalStorage,
};

export default AuthService;