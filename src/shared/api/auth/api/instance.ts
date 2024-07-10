import axios from "axios";

const instanceAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  // withCredentials: true, cors отключил
  withXSRFToken: true,
});

instanceAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!axios.isCancel(error)) {
      if (error.response.status === 401) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export { instanceAuth };
