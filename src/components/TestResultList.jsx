import useLoadTestResults from '../hooks/useLoadTestResults';
import useUsersStore from '../zustand/usersStore';
import TestResultItem from './TestResultItem';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
/**
 * @component TestResultList
 * @description 사용자의 MBTI 테스트 결과 목록을 표시하는 컴포넌트
 * @returns {JSX.Element} 테스트 결과 리스트를 렌더링하는 섹션
 */
const TestResultList = () => {
  const navigate = useNavigate();
  const { testResults, isPending } = useLoadTestResults();
  const authenticatedUserId = useUsersStore((state) => state.userId);

  return (
    <section className="p-4 py-28 sm:px-20 lg:px-40 xl:px-60">
      {isPending ? (
        <div className="text-center">로딩중 ...</div>
      ) : (
        <>
          {(Array.isArray(testResults) ? testResults : []).length > 0 && (
            <ul className="flex flex-col gap-20 p-6 bg-white border-gray-500 shadow-md xl:p-20 xl:py-14 rounded-xl">
              {testResults.map(
                (result) =>
                  (result.openedData ||
                    result.user.userId === authenticatedUserId) && (
                    <TestResultItem
                      key={result.id}
                      {...result}
                      authenticatedUserId={authenticatedUserId}
                    />
                  )
              )}
            </ul>
          )}
          {(Array.isArray(testResults) ? testResults : []).length === 0 && (
            <div className="flex flex-col items-center justify-center p-4 bg-white border-gray-500 shadow-md sm:p-20 pt-22 py-14 rounded-xl">
              <p>아직 아무도 테스트를 하지 않았어요 ᐡ´т ‧̫ т ᐡ</p>
              <Button
                text={'내가 가장 먼저 테스트하러 가기'}
                onClick={() => navigate('/test')}
              />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default TestResultList;
