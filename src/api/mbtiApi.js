import axios from 'axios';

const API_URL = 'https://glen-carbonated-anaconda.glitch.me/testResults';

const mbtiApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// TODO 질문
// ? 500번대만 처리할거면 의미가 있나
mbtiApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 500) {
      console.log('서버 오류가 발생했습니다.');
    }
    return Promise.reject(error); // 에러 반환
  }
);

export default mbtiApi;
