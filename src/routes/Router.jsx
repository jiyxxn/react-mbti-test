import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import TestPage from '../pages/TestPage';
import TestResultPage from '../pages/TestResultPage';
import ProtectedRoutes from './ProtectedRoutes';
import LayoutHeader from '../components/LayoutHeader';

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<ProtectedRoutes authentication={false} />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoutes authentication={true} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<TestResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
