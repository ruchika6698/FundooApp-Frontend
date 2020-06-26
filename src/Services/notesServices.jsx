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

}
export default NoteService;
