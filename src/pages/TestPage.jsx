import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateMBTI, mbtiDescriptions } from '../utils/mbtiCaculator';
import { fetchUserProfile } from '../api/userService';
import useAddTest from '../hooks/useAddTest';
import TestForm from '../components/TestForm';
import Button from '../components/Button';
import useUsersStore from '../zustand/usersStore';

/**
 * MBTI 테스트 페이지 컴포넌트
 * 사용자 정보를 가져오고, MBTI 결과를 계산하여 화면에 표시
 *
 * @returns {JSX.Element} MBTI 테스트 화면 또는 결과 화면을 렌더링
 */
const TestPage = () => {
  const [userInfo, setUserInfo] = useState({});
  const [result, setResult] = useState('');
  const navigate = useNavigate();
  const userToken = useUsersStore((state) => state.userToken);
  const { addTestResult, isAddSuccess } = useAddTest();

  /**
   * 사용자 정보를 가져오는 함수
   * 유저 토큰을 기반으로 프로필 정보를 API에서 가져옴
   *
   * @async
   * @function getUserInfo
   * @returns {void}
   */
  useEffect(() => {
    const getUserInfo = async () => {
      if (!userToken) {
        console.error('유저 토큰이 없습니다.');
        return;
      }

      try {
        const { data: userProfile } = await fetchUserProfile(userToken);
        setUserInfo({
          userId: userProfile.id,
          nickname: userProfile.nickname,
        });
      } catch (error) {
        console.error('프로필 정보를 불러오는 데 실패했습니다.', error);
        alert(
          '프로필 정보를 불러오는 데 실패했습니다. \n 로그아웃 후 재로그인 해주세요.'
        );
      }
    };
    getUserInfo();
  }, [userToken]);

  /**
   * MBTI 테스트 결과를 처리하는 함수
   * 테스트 결과를 계산하고 서버로 전송 후 화면에 결과를 표시
   *
   * @param {Object} answers - 사용자가 선택한 답변 객체
   * @returns {void}
   */
  const onPostResult = (answers) => {
    const mbtiResult = calculateMBTI(answers);

    // 서버로 결과 전송
    addTestResult({
      user: userInfo,
      results: mbtiResult,
      date: new Date(),
      openedData: true,
    });

    // 유저의 테스트 결과는 즉시 화면에 표시하여 UX 개선
    setResult(mbtiResult);
  };

  /**
   * 결과 페이지로 네비게이션하는 함수
   * 서버 전송 성공 시 결과 페이지로 이동
   *
   * @returns {void}
   */
  const handleNavigateToResults = () => {
    // 서버 전송이 성공하면 결과 페이지로 이동
    if (isAddSuccess) {
      navigate('/result');
    } else {
      console.error('결과 전송 실패');
      alert('결과 전송에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div className="p-6 sm:p-10 pt-28 lg:p-20 xl:px-60 xl:py-28">
      {!result ? (
        <TestForm onPostResult={onPostResult} />
      ) : (
        <div className="p-6 py-10 bg-white border-gray-500 shadow-md sm:py-14 sm:p-20 rounded-xl">
          <h2 className="mb-6 text-lg sm:text-xl">
            <span className="text-xl font-bold sm:text-2xl">
              {userInfo.nickname}
            </span>
            의 MBTI 결과는 ...{' '}
            <span className="text-xl font-bold text-indigo-800 sm:text-2xl">
              {result} ✨
            </span>
          </h2>
          <div>
            <p className="indent-2">{mbtiDescriptions[result]}</p>
          </div>
          <Button
            text={'다른 사람의 결과 보러가기'}
            onClick={handleNavigateToResults}></Button>
        </div>
      )}
    </div>
  );
};

export default TestPage;
