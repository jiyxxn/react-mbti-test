import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { authData } from '../api/auth';

const ProtectedRoutes = ({ authentication }) => {
  const isAuthenticated = authData()?.state?.isAuthenticated || false;

  // 인증이 필요한 페이지인데
  if (authentication) {
    return isAuthenticated === false ? (
      <Navigate to="/login" /> // 인증되지 않았으면 로그인 페이지로 랜딩
    ) : (
      <Outlet /> // 로그인 되었다면 해당 페이지 노출
    );
  } else {
    // 인증되지 않아야 하는 페이지인데
    return isAuthenticated === false ? ( // 바라던 대로 로그인 되지 않았다면
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
