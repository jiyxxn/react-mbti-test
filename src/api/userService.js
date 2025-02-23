import userApi from './userApi';

/**
 * @function registerUser
 * @description 새로운 사용자를 등록하는 함수
 * @param {Object} userData - 사용자 정보 (이메일, 비밀번호, 닉네임)
 * @returns {Object} API 응답 데이터
 */
export const registerUser = async (userData) => {
  try {
    const { data } = await userApi.post('/register', userData);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

/**
 * @function loginUser
 * @description 사용자를 로그인시키는 함수
 * @param {Object} userData - 로그인 정보 (이메일, 비밀번호)
 * @returns {Object} API 응답 데이터
 */
export const loginUser = async (userData) => {
  try {
    const { data } = await userApi.post('/login', userData);
    return data;
  } catch (error) {
    return error.response.data;
  }
};

/**
 * @function fetchUserProfile
 * @description 사용자의 프로필 정보를 불러오는 함수
 * @returns {Object} API 응답 데이터
 */
export const fetchUserProfile = async () => {
  try {
    const response = await userApi.get('/user');
    return response;
  } catch (error) {
    return error.response.data;
  }
};

/**
 * @function updateUserInfo
 * @description 사용자의 프로필 정보를 업데이트하는 함수
 * @param {FormData} FormData - 업데이트할 사용자 프로필 정보 (파일 포함)
 * @returns {Object} API 응답 데이터
 */
export const updateUserInfo = async (FormData) => {
  try {
    const response = await userApi.patch('/profile', FormData, {
      headers: { 'Content-type': 'multipart/form-data' },
    });
    return response;
  } catch (error) {
    return error.response.data;
  }
};
