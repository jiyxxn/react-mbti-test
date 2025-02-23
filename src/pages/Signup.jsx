import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/userService';
import AuthForm from '../components/AuthForm';

/**
 * 회원가입 페이지 컴포넌트
 * 사용자로부터 회원가입 정보를 입력받고 서버에 등록 요청을 보냄
 *
 * @returns {JSX.Element} 회원가입 폼 화면을 렌더링
 */
const Signup = () => {
  const navigate = useNavigate();

  /**
   * 회원가입 처리 함수
   * 사용자가 입력한 정보를 서버에 전달하고, 성공 시 로그인 페이지로 이동
   *
   * @param {Event} e - 폼 제출 이벤트
   * @param {Object} userData - 사용자가 입력한 회원가입 정보
   * @returns {void}
   */
  const onHandleSignup = async (e, userData) => {
    e.preventDefault();
    const response = await registerUser(userData);

    if (response.success) {
      alert(response.message);
      navigate('/login');
    } else {
      alert(response.message);
    }
  };

  return (
    <div className="flex-col justify-center flex-1 min-h-full px-6 py-12 lex lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
          회원가입
        </h2>
      </div>

      <AuthForm mode="signup" onSubmit={onHandleSignup} />
    </div>
  );
};

export default Signup;
