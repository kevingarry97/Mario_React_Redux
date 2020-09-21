import jwtDecode from "jwt-decode";

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (er) {
    return null;
  }
}

export default {
  getCurrentUser,
};
