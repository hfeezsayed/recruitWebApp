import axios from 'axios';

// Create Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://xenflexer.northcentralus.cloudapp.azure.com/xen', // Replace with your API base URL
  timeout: 1000000, // Timeout in milliseconds (optional)
});

// Request interceptor for adding authorization token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify headers, add tokens, etc. here before sending the request
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Response interceptor for handling 401 errors
axiosInstance.interceptors.response.use(
  (response) => {
    // If the request is successful, return the response
    return response;
  },
  (error) => {
    // Handle errors
    const { response } = error;
    if (response && response.status === 401) {
      // Handle 401 Unauthorized error
      // For example, redirect to login page or display a message
      console.log('Unauthorized request. Redirecting to login...');
      localStorage.removeItem("token");
      localStorage.removeItem("jobId");
      //navigate("/login")
      window.location.href = '/login';
    }
    return Promise.reject(error); // Reject the promise to propagate the error
  }
);

export default axiosInstance;
