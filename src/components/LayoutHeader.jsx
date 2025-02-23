import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUsersStore from '../zustand/bearsStore';

/**
 * @component LayoutHeader
 * @description 헤더 컴포넌트로, 대시보드, 테스트, 결과보기, 프로필, 로그인/로그아웃 메뉴를 제공
 * @description 로그인 상태에 따라 다른 메뉴를 표시하며, 드롭다운을 통해 프로필과 로그아웃 기능을 제공
 * @returns {JSX.Element} 페이지 상단에 표시되는 헤더
 */
const LayoutHeader = () => {
  const navigate = useNavigate();
  const isAuthenticated = useUsersStore((state) => state.isAuthenticated);
  const userLogout = useUsersStore((state) => state.userLogout);

  // 드롭다운 열림/닫힘 상태 관리
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const onHandleLogout = () => {
    userLogout();
    alert('로그아웃되었습니다.');
    navigate('/');
  };

  return (
    <header className="flex items-center justify-between px-4 mx-auto bg-indigo-950 sm:px-6 lg:px-8">
      <div className="relative flex items-center h-16 gap-6">
        <h1>로고</h1>
        <nav className="relative flex items-center gap-4">
          <div
            className="px-3 py-2 text-sm font-medium text-gray-200 bg-indigo-900 rounded-md cursor-pointer hover:bg-indigo-700 hover:text-white"
            onClick={() => navigate('/')}>
            대시보드
          </div>
          {isAuthenticated && (
            <>
              <div
                className="px-3 py-2 text-sm font-medium text-gray-200 bg-indigo-900 rounded-md cursor-pointer hover:bg-indigo-700 hover:text-white"
                onClick={() => navigate('/test')}>
                테스트
              </div>
              <div
                className="px-3 py-2 text-sm font-medium text-gray-200 bg-indigo-900 rounded-md cursor-pointer hover:bg-indigo-700 hover:text-white"
                onClick={() => navigate('/result')}>
                결과 보기
              </div>
            </>
          )}
        </nav>
      </div>

      {isAuthenticated ? (
        <div>
          <div
            onClick={toggleDropdown}
            className="relative flex text-sm rounded-full cursor-pointer focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">사용자 메뉴 열림</span>
            <img
              alt=""
              src="https://static-00.iconduck.com/assets.00/profile-user-icon-1024x1024-5fg7tz2z.png"
              className="w-8 rounded-full"
            />
          </div>

          {/* 드롭다운 메뉴 */}
          {isDropdownOpen && (
            <div className="absolute z-10 w-48 py-1 mt-2 transition-all duration-100 ease-out origin-top-right transform scale-100 bg-white rounded-md shadow-lg opacity-100 right-2 ring-1 ring-black/5">
              <div>
                <span
                  onClick={() => navigate('/profile')}
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 focus:outline-none">
                  프로필
                </span>
              </div>
              <div>
                <span
                  className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 focus:outline-none"
                  onClick={() => onHandleLogout()}>
                  로그아웃
                </span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <button
          type="button"
          className="px-3 py-2 text-sm font-bold text-white bg-indigo-600 rounded-md cursor-pointer hover:bg-indigo-500"
          onClick={() => navigate('/login')}>
          로그인
        </button>
      )}
    </header>
  );
};

export default LayoutHeader;
