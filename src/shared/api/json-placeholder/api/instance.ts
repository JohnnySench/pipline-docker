import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

instance.interceptors.response.use(
  (response) => {
    console.log("filfilled");
    return response;
  },
  (error) => {
    console.log("error");
    if (!axios.isCancel(error)) {
      if (error.response.status === 401) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export { instance };
