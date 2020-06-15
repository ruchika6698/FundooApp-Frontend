import axios from 'axios';

const apiUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/user';

class Service {
    
    get() {
        console.log(" get in axios service ");
    return   axios.get(apiUrl);
    }

}
export default Service;