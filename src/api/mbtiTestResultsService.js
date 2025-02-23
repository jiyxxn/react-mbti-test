import mbtiApi from './mbtiApi';

/**
 * @function createTestResult
 * @description 새로운 테스트 결과를 서버에 생성하는 함수
 * @param {Object} testResult - 생성할 테스트 결과 데이터
 * @returns {Object} 생성된 테스트 결과 데이터
 */
export const createTestResult = async (testResult) => {
  const response = await mbtiApi.post('', testResult);
  return response.data;
};

/**
 * @function readTestResults
 * @description 서버에서 모든 mbti 테스트 결과를 조회하고 날짜를 기준으로 내림차순으로 정렬하는 함수
 * @returns {Array} 정렬된 테스트 결과 목록
 */
export const readTestResults = async () => {
  const response = await mbtiApi.get('');
  const sortedData = response.data.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return sortedData;
};

/**
 * @function updateTestResult
 * @description mbti 테스트 결과의 공개 여부를 전환하는 함수
 * @param {string} testId - 수정할 테스트 결과의 ID
 * @returns {Object} 수정된 테스트 결과 데이터
 */
export const updateTestResult = async (testId) => {
  const { data: currentData } = await mbtiApi.get(`/${testId}`);
  const updatedData = { openedData: !currentData.openedData };

  // 공개 여부 전환
  const response = await mbtiApi.patch(`/${testId}`, updatedData);
  return response.data;
};

/**
 * @function deleteTestResult
 * @description mbti 테스트 결과를 서버에서 삭제하는 함수
 * @param {string} testId - 삭제할 테스트 결과의 ID
 * @returns {Object} 삭제된 테스트 결과 데이터
 */
export const deleteTestResult = async (testId) => {
  const response = await mbtiApi.delete(`/${testId}`);
  return response.data;
};
