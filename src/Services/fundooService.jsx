import axios from 'axios';

const apiUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user';

class Service {
    
    get() {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }
    login(data) {
        console.log(" get in axios service ",data);
    return   axios.post(apiUrl+"/login",data);
    }
    Registration(data) {
        console.log(" get in axios service ",data);
    return   axios.post(apiUrl+"/userSignUp",data);
    }
    ForgotPassword(data){
        console.log(" get in axios service ",data);
    return   axios.post(apiUrl+"/reset",data);
    }
}
export default Service;