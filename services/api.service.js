
import axios from 'axios';
const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
    // Other Axios configuration options can be added here
  });



export default apiClient;

