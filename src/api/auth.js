import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

export const register = async (userData) => {
  try {
    const { data } = await axios.post(`${API_URL}/register`, userData);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

export const login = async (userData) => {
  try {
    const { data } = await axios.post(`${API_URL}/login`, userData);
    return data;
  } catch (e) {
    return e.response.data;
  }
};

export const authData = () =>
  JSON.parse(localStorage.getItem('auth-storage') || '{}');
