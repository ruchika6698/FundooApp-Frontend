import axios from "axios";

const apiUrl = "http://fundoonotes.incubation.bridgelabz.com/api/user";

class Service {
  Login(data) {
    console.log(" get in axios service ", data);
    return axios.post(apiUrl + "/login", data);
  }
  Registration(data) {
    console.log(" get in axios service ", data);
    return axios.post(apiUrl + "/userSignUp", data);
  }
  ForgotPassword(data) {
    console.log(" get in axios service ", data);
    return axios.post(apiUrl + "/reset", data);
  }
  Resetpassword(token, data) {
    console.log(" get in axios service ", data);
    return axios.post(apiUrl + "/reset-password", data, {
      headers: {
        Authorization: token,
      },
    });
  }
}
export default Service;
