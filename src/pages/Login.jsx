import { useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import AuthForm from '../components/AuthForm';
import useUsersStore from '../zustand/bearsStore';

const Login = () => {
  const navigate = useNavigate();
  const userLogin = useUsersStore((state) => state.userLogin);

  const onHandleLogin = async (e, userData) => {
    e.preventDefault();
    const response = await login(userData);
    console.log('response =====>', response);
    if (response.success) {
      alert(`${response.nickname}님 환영합니다.`);
      userLogin(response.accessToken);
      navigate('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="lex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          로그인
        </h2>
      </div>

      <AuthForm mode="login" onSubmit={onHandleLogin} />
    </div>
  );
};

export default Login;
