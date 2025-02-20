import { useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import AuthForm from '../components/AuthForm';

const Signup = () => {
  const navigate = useNavigate();

  const onHandleSignup = async (e, userData) => {
    e.preventDefault();
    const response = await register(userData);

    if (response.success) {
      alert(response.message);
      navigate('/login');
    } else {
      alert(response.message);
    }
  };
  return (
    <div className="lex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          회원가입
        </h2>
      </div>

      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </div>
  );
};

export default Signup;
