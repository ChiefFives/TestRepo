import axios from 'axios';

let Request = axios.create({
    user: "demouser@macrosoft.com",
    password: "Test_1234",
    host: "localhost",
    port: 8081,
    timeout: 10000,
  });

  export const setClientToken = token => {
    Request.interceptors.request.use(function(config) {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };
  
  export default Request;