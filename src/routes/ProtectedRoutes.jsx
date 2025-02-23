import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import useUsersStore from '../zustand/bearsStore';

/**
 * 인증 여부에 따라 접근을 제어하는 라우트 컴포넌트
 * 인증이 필요한 페이지와 그렇지 않은 페이지를 구분하여 리다이렉트 처리
 *
 * @param {Object} props - 컴포넌트의 프로퍼티
 * @param {boolean} props.authentication - 인증이 필요한지 여부를 나타내는 불리언 값
 * @returns {JSX.Element} 인증 상태에 따라 다른 화면을 렌더링
 */

const ProtectedRoutes = ({ authentication }) => {
  const isAuthenticated = useUsersStore((state) => state.isAuthenticated);

  // 로그인이 필요한 페이지인데
  if (authentication) {
    return isAuthenticated === false ? (
      <Navigate to="/login" /> // 로그인되지 않았으면 로그인 페이지로 랜딩
    ) : (
      <Outlet /> // 로그인 되었다면 해당 페이지 노출
    );
  } else {
    // 비로그인 상태에만 접근 가능한 페이지인데 (e.g. 로그인 페이지)
    return isAuthenticated === false ? ( // 비로그인 상태라면
      <Outlet /> // 로그인 페이지로 이동
    ) : (
      <Navigate to="/" /> // 로그인 된 유저가 접근하려 할 시 홈으로 랜딩
    );
  }
};

ProtectedRoutes.propTypes = {
  authentication: PropTypes.bool.isRequired,
};

export default ProtectedRoutes;
