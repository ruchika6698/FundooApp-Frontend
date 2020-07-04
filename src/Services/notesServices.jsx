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
    return axiosService.Post(`${apiUrl}notes/updateNotes`,data, {
        headers: {
            Authorization: token
        }
    });
  }

  changeColor(token,colorInput) {
    console.log("note color", colorInput);
    return axiosService.Post(`${apiUrl}notes/changesColorNotes`,colorInput, {
        headers: {
            Authorization: token
        }
    });
  }

  getTrashNotes(token) {
    return axiosService.Get(`${apiUrl}notes/getTrashNotesList`, {
        headers: {
            Authorization: token
        }
    });
  }

  ArchieveNotes(token,data){
    console.log(" Id in axios service ",data);
    return axiosService.Post(`${apiUrl}notes/archiveNotes`,data, {
        headers: {
            Authorization: token
        }
    });
  }

  getArchieveNotes(token) {
    return axiosService.Get(`${apiUrl}notes/getArchiveNotesList`, {
        headers: {
            Authorization: token
        }
    });
  }

  SearchUser(token,data) {
    console.log("get axios services",data);
    return axiosService.Post(`${apiUrl}user/searchUserList`, data, {
      headers: {
        Authorization: token
      },
    });
  }

   AddCollaborator(id,token,data) {
     console.log("get axios services",data);
    return axiosService.Post(apiUrl+'notes/'+id+'/AddcollaboratorsNotes', data, {
      headers: {
        Authorization: token
      },
    });
  }

}
export default NoteService;
