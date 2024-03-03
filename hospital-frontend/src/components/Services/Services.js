import axios from "axios";
const BACKEND_API = "http://localhost:8080/api";
class Services {

  userRegistration(user) {
    return axios.post(BACKEND_API + "/user/create", user );
  }
  userLogin(user) {
    return axios.post(BACKEND_API + "/user/login", user);
  }
  addClientFeedback(clientFeedback) {
    return axios.post(BACKEND_API + "/feedback", clientFeedback);
  }

  addEnquiry(enquiry) {
    return axios.post(BACKEND_API + "/enquiry", enquiry);
  }

  addAppointment(appointment) {
    return axios.post(BACKEND_API + "/appointments/schedule", appointment);
  }
  
  
}

export default new Services()