import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTestResult } from '../api/testResults';

/**
 * @hook useAddTest
 * @description 새로운 테스트 결과를 추가하는 커스텀 훅
 * @returns {Object} 테스트 결과 추가 함수 및 상태 반환
 * @property {Function} addTestResult - 새로운 테스트 결과를 추가하는 함수
 * @property {boolean} isAddPending - 추가 요청이 진행 중인지 여부
 * @property {boolean} isAddSuccess - 추가 요청이 성공했는지 여부
 */
const useAddTest = () => {
  const queryClient = useQueryClient();

  const {
    mutate: addTestResult,
    isPending: isAddPending,
    isSuccess: isAddSuccess,
  } = useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testResults'] });
    },
  });

  return { addTestResult, isAddPending, isAddSuccess };
};

export default useAddTest;
