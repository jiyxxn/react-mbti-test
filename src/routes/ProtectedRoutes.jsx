import { Navigate, Outlet } from 'react-router-dom';

/**
 * @component ProtectedRoutes
 * @description 인증된 사용자만 접근할 수 있는 경로를 처리하는 컴포넌트
 * @param {boolean} props.isAuthenticated - 사용자가 인증되었는지 여부
 * @returns {JSX.Element} 인증된 경우 <Outlet />을 렌더링하고, 인증되지 않은 경우 로그인 페이지로 리다이렉트
 */
const ProtectedRoutes = ({ isAuthenticated }) => {
  return isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
