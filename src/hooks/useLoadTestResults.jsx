import { useQuery } from '@tanstack/react-query';
import { readTestResults } from '../api/mbtiTestResultsService';

/**
 * @hook useLoadTestResults
 * @description 테스트 결과를 불러오는 커스텀 훅
 * @returns {Object} 테스트 결과 데이터 및 상태 반환
 * @property {Array} testResults - 불러온 테스트 결과 데이터
 * @property {boolean} isSuccess - 데이터 로딩 성공 여부
 * @property {boolean} isPending - 데이터 로딩 중 여부
 */
const useLoadTestResults = () => {
  const {
    data: testResults,
    isSuccess,
    isPending,
  } = useQuery({
    queryKey: ['testResults'],
    queryFn: readTestResults,
  });

  return { testResults, isSuccess, isPending };
};

export default useLoadTestResults;
