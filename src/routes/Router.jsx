import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import TestPage from '../pages/TestPage';
import TestResultsPage from '../pages/TestResultsPage';
import ProtectedRoutes from './ProtectedRoutes';
import LayoutHeader from '../components/LayoutHeader';
import ScrollToTop from '../components/ScrollToTop';
import PublicRoutes from './PublicRoutes';
import useUsersStore from '../zustand/usersStore';

const Router = () => {
  const isAuthenticated = useUsersStore((state) => state.isAuthenticated);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LayoutHeader />
      <Routes>
        <Route element={<PublicRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<TestResultsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
