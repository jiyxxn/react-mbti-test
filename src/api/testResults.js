import axios from 'axios';

// API 기본 URL 설정
const API_URL = 'https://glen-carbonated-anaconda.glitch.me/testResults';

/**
 * @function createTestResult
 * @description 새로운 테스트 결과를 서버에 생성하는 함수
 * @param {Object} testResult - 생성할 테스트 결과 데이터
 * @returns {Object} 생성된 테스트 결과 데이터
 */
export const createTestResult = async (testResult) => {
  const response = await axios.post(API_URL, testResult);
  return response.data;
};

/**
 * @function readTestResults
 * @description 서버에서 모든 테스트 결과를 조회하고 날짜를 기준으로 내림차순으로 정렬하는 함수
 * @returns {Array} 정렬된 테스트 결과 목록
 */
export const readTestResults = async () => {
  const response = await axios.get(API_URL);
  const sortedData = response.data.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return sortedData;
};

/**
 * @function updateTestResult
 * @description 특정 테스트 결과의 공개 여부를 전환하는 함수
 * @param {string} testId - 수정할 테스트 결과의 ID
 * @returns {Object} 수정된 테스트 결과 데이터
 */
export const updateTestResult = async (testId) => {
  const { data: currentData } = await axios.get(`${API_URL}/${testId}`);
  const updatedData = { openedData: !currentData.openedData };

  // 공개 여부 전환
  const response = await axios.patch(`${API_URL}/${testId}`, updatedData);
  return response.data;
};

/**
 * @function deleteTestResult
 * @description 특정 테스트 결과를 서버에서 삭제하는 함수
 * @param {string} testId - 삭제할 테스트 결과의 ID
 * @returns {Object} 삭제된 테스트 결과 데이터
 */
export const deleteTestResult = async (testId) => {
  const response = await axios.delete(`${API_URL}/${testId}`);
  return response.data;
};
