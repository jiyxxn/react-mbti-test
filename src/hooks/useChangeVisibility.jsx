import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTestResult } from '../api/testResults';

/**
 * @hook useChangeVisibility
 * @description 테스트 결과의 공개 여부를 변경하는 커스텀 훅
 * @returns {Object} 공개 여부 변경 함수 및 상태 반환
 * @property {Function} changeVisibility - 테스트 결과의 공개 여부를 변경하는 함수
 * @property {boolean} isUpdatePending - 변경 요청이 진행 중인지 여부
 * @property {boolean} isUpdateSuccess - 변경 요청이 성공했는지 여부
 */
const useChangeVisibility = () => {
  const queryClient = useQueryClient();

  const {
    mutate: changeVisibility,
    isPending: isUpdatePending,
    isSuccess: isUpdateSuccess,
  } = useMutation({
    mutationFn: updateTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['testResults'] });
    },
  });

  return { changeVisibility, isUpdatePending, isUpdateSuccess };
};

export default useChangeVisibility;
