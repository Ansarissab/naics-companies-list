import axios from "axios";
import { API_URL } from "../Constants";
import AuthenticationForApiService from "../services/AuthenticationForApiService";

class CompanyApi {
  retrieveAllCompanies(name, sort) {
    return axios.get(`${API_URL}/companies/?name=${name}&sort=${sort}`, {
      headers: AuthenticationForApiService.getCredentials(),
    });
  }
}

export default new CompanyApi();
