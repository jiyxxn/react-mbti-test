import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUsersStore from '../zustand/bearsStore';
import { authData } from '../api/auth';

const LayoutHeader = () => {
  const navigate = useNavigate();
  const isAuthenticated = authData()?.state?.isAuthenticated || false;
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
    <header className="bg-gray-800 flex items-center justify-between px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="relative flex gap-6 h-16 items-center">
        <h1>로고</h1>
        <nav className="relative flex gap-4 items-center">
          <div
            className="cursor-pointer bg-gray-900 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => navigate('/')}>
            대시보드
          </div>
          {isAuthenticated && (
            <>
              <div
                className="cursor-pointer bg-gray-900 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                onClick={() => navigate('/test')}>
                테스트
              </div>
              <div
                className="cursor-pointer bg-gray-900 rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
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
            className="cursor-pointer relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
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
            <div className="absolute right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 transition-all duration-100 ease-out transform opacity-100 scale-100">
              <div>
                <span
                  onClick={() => navigate('/profile')}
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none">
                  프로필
                </span>
              </div>
              <div>
                <span
                  className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none"
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
          className="cursor-pointer bg-indigo-600 rounded-md px-3 py-2 text-sm font-bold text-white hover:bg-indigo-500"
          onClick={() => navigate('/login')}>
          로그인
        </button>
      )}
    </header>
  );
};

export default LayoutHeader;
