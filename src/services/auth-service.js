import axios from "axios";
const instance = axios.create();

const API_URL = "http://127.0.0.1:8000";

//register
const Register = (username, email, password) => {
    return axios.post(API_URL + "/api/register", {
        username,
        email,
        password,
    });
};

//login
const Login = (username, password) => {
    return instance.post(API_URL + "/api/token/", {
        username,
        password
    }).then((response) => {
        console.log(response.data)
        //save token
        localStorage.setItem("token", response.data.access);

        return response.data;
    });
};

//logout
const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn", true);
    localStorage.removeItem("authUser", true);
};

//get current user
const GetCurrentUser = () => {
    return JSON.parse(localStorage.getItem("authUser"));
};

export default {
    Register,
    Login,
    Logout,
    GetCurrentUser,
};