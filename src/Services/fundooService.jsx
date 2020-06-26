import Config from "../Configuration/config";
import AxiosService from './axiosServices'

const axiosService = new AxiosService();
const apiUrl = Config.url;

class Service {
  Login(data) {
    return axiosService.Post(`${apiUrl}user/login`, data,false);
  }
  
  Registration(data) {
    return axiosService.Post(`${apiUrl}user/userSignUp`, data,false);
  }

  ForgotPassword(data) {
    return axiosService.Post(`${apiUrl}user/reset`, data,false);
  }

  Resetpassword(token, data) {
    return axiosService.Post(`${apiUrl}user/reset-password`, data, {
      headers: {
        Authorization: token,
      },
    });
  }
}
export default Service;
