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
    return axiosService.Post(`${apiUrl}notes/deleteForeverNotes`,data, {
        headers: {
            Authorization: token
        }
    });
  }

  UpdateNotes(token,data){
    return axiosService.Post(`${apiUrl}notes/updateNotes`,data, {
        headers: {
            Authorization: token
        }
    });
  }

  updateColor(token,colorInput) {
    console.log("note color", colorInput);
    return axiosService.Post(`${apiUrl}notes/changesColorNotes`,colorInput, {
        headers: {
            Authorization: token
        }
    });
  }
}
export default NoteService;
