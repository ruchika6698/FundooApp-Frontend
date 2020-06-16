import axios from 'axios';

const apiUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user';

class Service {
    
    get() {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }
    login() {
        console.log(" get in axios service ");
    return   axios.post(apiUrl+"/");
    }
    Registration() {
        console.log(" get in axios service ");
    return   axios.post(apiUrl+"/");
    }
}
export default Service;