import axios from "axios";

const instance = axios.create({baseURL: "https://api.encora.example"});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.Authorization = `Bearer TEST_TOKEN`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code within the range of 2xx triggers this
    return response;
  },
  function (error) {
    // Any status codes outside 2xx trigger this
    return Promise.reject(error);
  }
);

export default instance;
