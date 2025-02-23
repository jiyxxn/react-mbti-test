import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTestResult } from '../api/mbtiTestResultsService';

/**
 * @hook useDeleteTest
 * @description 테스트 결과를 삭제하는 커스텀 훅
 * @returns {Object} 테스트 결과 삭제 함수 및 상태 반환
 * @property {Function} deleteTestResult - 테스트 결과를 삭제하는 함수
 * @property {boolean} isDeletePending - 삭제 요청이 진행 중인지 여부
 * @property {boolean} isDeleteSuccess - 삭제 요청이 성공했는지 여부
 */
const useDeleteTest = () => {
  const queryClient = useQueryClient();

  const {
    mutate: deleteResult,
    isPending: isDeletePending,
    isSuccess: isDeleteSuccess,
  } = useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testResults'] });
    },
  });

  return { deleteResult, isDeletePending, isDeleteSuccess };
};

export default useDeleteTest;
