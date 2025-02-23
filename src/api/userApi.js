import axios from 'axios';

// API 기본 URL 설정
const API_URL = 'https://www.nbcamp-react-auth.link';

// Axios 인스턴스 생성
const userApi = axios.create({
  baseURL: API_URL, // 기본 API URL
  headers: {
    'Content-Type': 'application/json', // 요청 헤더에 JSON 설정
  },
});

/**
 * @function requestInterceptor
 * @description 요청을 보낼 때마다 인터셉터를 통해 Authorization 헤더에 accessToken을 추가
 * @param {Object} config - Axios 요청 설정
 * @returns {Object} 수정된 요청 설정
 */
userApi.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 사용자 인증 정보 불러오기
    const authData = JSON.parse(localStorage.getItem('auth-storage') || '{}');
    const token = authData?.state?.userToken;

    // 토큰이 존재하면 Authorization 헤더에 Bearer 토큰 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config; // 수정된 설정 반환
  },
  (error) => Promise.reject(error) // 요청 중 오류 발생 시
);

export default userApi;
