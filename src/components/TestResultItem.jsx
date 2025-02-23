import { useEffect } from 'react';
import { mbtiDescriptions } from '../utils/mbtiCaculator';
import useChangeVisibility from '../hooks/useChangeVisibility';
import useDeleteTest from '../hooks/useDeleteTest';

/**
 * @component TestResultItem
 * @description 사용자의 MBTI 테스트 결과를 표시하는 리스트 아이템 컴포넌트
 * @param {string} props.id - 테스트 결과의 고유 ID
 * @param {Object} props.user - 테스트를 진행한 사용자 정보
 * @param {string} props.user.nickname - 사용자의 닉네임
 * @param {string} props.user.userId - 사용자의 고유 ID
 * @param {string} props.date - 테스트가 진행된 날짜, 형식 : 2025-02-22T12:34:56Z
 * @param {boolean} props.openedData - 테스트 결과 공개 여부
 * @param {string} props.results - MBTI 테스트 결과
 * @param {string} props.authenticatedUserId - 현재 로그인한 사용자 ID
 * @returns {JSX.Element} 테스트 결과 아이템을 렌더링하는 컴포넌트
 */
const TestResultItem = ({
  id,
  user,
  date,
  openedData,
  results,
  authenticatedUserId,
}) => {
  const { changeVisibility, isUpdateSuccess } = useChangeVisibility();
  const { deleteResult, isDeleteSuccess } = useDeleteTest();

  /**
   * @function onHandleUpdate
   * @description 테스트 결과의 공개 여부를 변경하는 함수
   * @param {string} testId - 변경할 테스트 결과의 ID
   */
  const onHandleUpdate = (testId) => {
    const isConfirmed = confirm('해당 결과를 비공개하시겠습니까?');
    if (!isConfirmed) return;
    changeVisibility(testId);
  };

  useEffect(() => {
    if (isUpdateSuccess) alert('공개 여부가 수정되었습니다.');
  }, [isUpdateSuccess]);

  /**
   * @function onHandleDelete
   * @description 테스트 결과를 삭제하는 함수
   * @param {string} testId - 삭제할 테스트 결과의 ID
   */
  const onHandleDelete = (testId) => {
    const isConfirmed = confirm('정말 삭제하시겠습니까?');
    if (!isConfirmed) return;
    deleteResult(testId);
  };

  useEffect(() => {
    if (isDeleteSuccess) alert('삭제되었습니다.');
  }, [isDeleteSuccess]);

  return (
    <li>
      <div className="flex items-center justify-between px-2 py-4">
        <span className="text-xl font-semibold text-slate-700">
          {user.nickname}
          <span className="text-sm text-slate-500"> 의 결과 💌</span>
        </span>
        <span className="text-sm text-gray-400">
          {new Date(date).toLocaleString()}
        </span>
      </div>
      <div className="p-6 border-2 border-indigo-100 shadow-inner bg-indigo-50 rounded-xl text-indigo-950 shadow-indigo-100">
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">{results}</span>
          {user.userId === authenticatedUserId && ( // 자신이 테스트한 결과에만 버튼 노출
            <div>
              <button
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-500 rounded hover:bg-indigo-600"
                onClick={() => onHandleUpdate(id)}>
                {openedData ? '비공개로 전환' : '공개로 전환'}
              </button>
              <button
                className="px-4 py-2 ml-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600"
                onClick={() => onHandleDelete(id)}>
                삭제하기
              </button>
            </div>
          )}
        </div>
        <p className="p-2 pt-4 mt-2 border-t-2 border-indigo-100 border-dotted indent-1">
          {mbtiDescriptions[results]}
        </p>
      </div>
    </li>
  );
};

export default TestResultItem;
