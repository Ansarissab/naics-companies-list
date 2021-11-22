import axios from "axios";
import { API_URL } from "../Constants";

export const AUTHENTICATED_USER_SESSION = "authenticatedUser";

class AuthenticationForApiService {
  authenticate(email, password) {
    const data = {
      email: email,
      password: password,
    };
    return axios.post(`${API_URL}/auth/sign_in`, data);
  }

  registerSuccessfulLogin(email, token, client, uid) {
    sessionStorage.setItem(AUTHENTICATED_USER_SESSION, email);
    sessionStorage.setItem("jwt", token);
    sessionStorage.setItem("client", client);
    sessionStorage.setItem("uid", uid);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER_SESSION);
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("client");
    sessionStorage.removeItem("uid");
  }

  isUserLoggedIn() {
    let uid = sessionStorage.getItem("uid");
    if (uid === null) {
      uid = "";
    }
    if (uid.length > 0) return true;
    return false;
  }

  getCredentials() {
    return {
      "access-token": sessionStorage.getItem("jwt"),
      uid: sessionStorage.getItem("uid"),
      client: sessionStorage.getItem("client"),
    };
  }
}

export default new AuthenticationForApiService();
