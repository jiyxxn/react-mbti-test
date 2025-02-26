import { Outlet, useLocation } from 'react-router-dom';
import Home from '../pages/Home';

/**
 * @component PublicRoutes
 * @description 로그인 및 회원가입 페이지 접근 시 인증 상태에 따라 적절한 화면을 렌더링하는 컴포넌트
 * @param {boolean} props.isAuthenticated - 사용자가 인증되었는지 여부
 * @returns {JSX.Element} 인증되지 않은 사용자는 <Outlet />을, 인증된 사용자는 홈 페이지를 렌더링
 */
const PublicRoutes = ({ isAuthenticated }) => {
  const location = useLocation().pathname;
  const unAuthenticatedPages = ['/login', '/signup'];

  if (unAuthenticatedPages.includes(location)) {
    return isAuthenticated ? <Home /> : <Outlet />;
  }

  return <Home />;
};

export default PublicRoutes;
