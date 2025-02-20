import { useState } from 'react';
import { authData, getUserProfile, updateUserProfile } from '../api/auth';
import { useEffect } from 'react';

const Profile = () => {
  const [userNickname, setUserNickname] = useState('');
  const userToken = authData()?.state?.userToken;

  useEffect(() => {
    const getUserNickname = async () => {
      try {
        const { data: userProfile } = await getUserProfile(userToken);
        setUserNickname(userProfile.nickname); // 기존 닉네임 삽입
      } catch (error) {
        console.error('프로필 정보를 불러오는 데 실패했습니다.', error);
      }
    };

    getUserNickname();
  }, [userToken]);

  const onUpdateUserNickname = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nickname', userNickname);
    const response = await updateUserProfile(formData, userToken);
    alert(response.data.message);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md bg-white py-14 px-10 rounded-xl shadow-md">
      <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 mb-10">
        프로필 수정
      </h2>
      <form
        action="#"
        method="PATCH"
        className="space-y-6"
        onSubmit={(e) => onUpdateUserNickname(e)}>
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
        <button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          프로필 업데이트
        </button>
      </form>
    </div>
  );
};

export default Profile;
