import Config from "../Configuration/config";
import AxiosService from './axiosServices'

const axiosService = new AxiosService();
const apiUrl = Config.url;


class NoteService {

  CreateNote(token, data) {
    return axiosService.Post(`${apiUrl}notes/addNotes`, data, {
      headers: {
        Authorization: token
      },
    });
  }
  getAllNotes(token) {
    return axiosService.Get(`${apiUrl}notes/getNotesList`, {
        headers: {
            Authorization: token
        }
    });
  }

  DeleteNotes(token,data){
    console.log(" Id in axios service ",data);
    return axiosService.Post(`${apiUrl}notes/trashNotes`,data, {
        headers: {
            Authorization: token
        }
    });
  }

  UpdateNotes(token,data){
    console.log(" Id in axios service ",data);
    return axiosService.Post(`${apiUrl}notes/updateNotes`,data, {
        headers: {
            Authorization: token
        }
    });
  }

}
export default NoteService;
