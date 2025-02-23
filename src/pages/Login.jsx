import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/userService';
import AuthForm from '../components/AuthForm';
import useUsersStore from '../zustand/bearsStore';

/**
 * 로그인 페이지 컴포넌트
 * 사용자가 로그인할 수 있도록 로그인 폼을 렌더링하고, 로그인 성공 시 홈으로 이동
 *
 * @returns {JSX.Element} 로그인 폼 화면을 렌더링
 */
const Login = () => {
  const navigate = useNavigate();
  const userLogin = useUsersStore((state) => state.userLogin);

  const onHandleLogin = async (e, userData) => {
    e.preventDefault();
    const response = await loginUser(userData);

    if (response.success) {
      alert(`${response.nickname}님 환영합니다.`);
      userLogin(response.accessToken, response.userId); // localStorage에 user 정보 저장
      navigate('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-28 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="font-bold tracking-tight text-center text-gray-900 text-2xl/9">
          로그인
        </h2>
      </div>

      <AuthForm mode="login" onSubmit={onHandleLogin} />
    </div>
  );
};

export default Login;
