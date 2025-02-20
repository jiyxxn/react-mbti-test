import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ mode, onSubmit }) => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userNickname, setUserNickname] = useState('');

  const userData = {
    id: userId,
    password: userPassword,
    nickname: userNickname,
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white py-14 px-10 rounded-xl shadow-md">
      <>
        <form
          action="#"
          method="POST"
          className="space-y-6"
          onSubmit={(e) => onSubmit(e, userData)}>
          <div>
            <label
              htmlFor="id"
              className="block text-sm/6 font-medium text-black">
              아이디
            </label>
            <div className="mt-2">
              <input
                id="id"
                name="id"
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          {mode === 'signup' && (
            <div>
              <label
                htmlFor="nickname"
                className="block text-sm/6 font-medium text-black">
                닉네임
              </label>
              <div className="mt-2">
                <input
                  id="nickname"
                  name="nickname"
                  type="text"
                  value={userNickname}
                  onChange={(e) => setUserNickname(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          )}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-black">
                비밀번호
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {mode === 'login' ? (
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                로그인
              </button>
            </div>
          ) : (
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                회원가입
              </button>
            </div>
          )}
        </form>
        {mode === 'login' ? (
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            계정이 없으신가요?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500">
              회원가입
            </span>
          </p>
        ) : (
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            이미 계정이 있으신가요?{' '}
            <span
              onClick={() => navigate('/login')}
              className="cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500">
              로그인
            </span>
          </p>
        )}
      </>
    </div>
  );
};

export default AuthForm;
