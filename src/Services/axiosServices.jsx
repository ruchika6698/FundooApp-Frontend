import axios from 'axios'

export default class AxiosService{
    Post(url,data,isHeaderRequired){
         console.log("Collabareater",url,data,isHeaderRequired)
        return axios.post(url,data,isHeaderRequired);
       
    }

    Get(url,data,isHeaderRequired){
        return axios.get(url,data,isHeaderRequired);
    }
    
    Delete(url,id,isHeaderRequired){
        return axios.delete(url,id,isHeaderRequired);
    }
}