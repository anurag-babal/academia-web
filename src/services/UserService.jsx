import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export async function register(data) {
  try {
    const response = await axios.post(`${apiUrl}/register`, data);
    return response.data.data;
  } catch (error) {
    console.log(error.response);
    const errorMessage = error.response ? error.response.data.message : "Server not reachable";
    throw new Error('Registration failed: ' + errorMessage);
  }
}