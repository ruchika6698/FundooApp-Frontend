import axios from "axios";

const apiUrl = "http://fundoonotes.incubation.bridgelabz.com/api/notes";

class NoteService {
  CreateNote(data) {
    console.log(" get in axios service ", data);
    return axios.post(apiUrl + "/addNotes", data);
  }
  
}
export default NoteService;
