import { useState } from 'react';
import { fetchUserProfile, updateUserInfo } from '../api/userService';
import { useEffect } from 'react';
import useUsersStore from '../zustand/bearsStore';

/**
 * 프로필 수정 페이지 컴포넌트
 * 사용자 프로필 정보를 불러와 닉네임을 수정하는 기능을 제공
 *
 * @returns {JSX.Element} 프로필 수정 폼 화면을 렌더링
 */
const Profile = () => {
  const [userNickname, setUserNickname] = useState('');
  const userToken = useUsersStore((state) => state.userToken);

  useEffect(() => {
    const getUserNickname = async () => {
      try {
        const { data: userProfile } = await fetchUserProfile(userToken);
        setUserNickname(userProfile.nickname); // 기존 닉네임 삽입
      } catch (error) {
        console.error('프로필 정보를 불러오는 데 실패했습니다.', error);
        alert(
          '프로필 정보를 불러오는 데 실패했습니다. \n 로그아웃 후 재로그인 해주세요.'
        );
      }
    };

    getUserNickname();
  }, [userToken]);

  const onUpdateUserNickname = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('nickname', userNickname);
    const response = await updateUserInfo(formData);
    alert(response.data.message);
  };

  return (
    <div className="px-10 mt-10 bg-white shadow-md sm:mx-auto sm:w-full sm:max-w-md py-14 rounded-xl">
      <h2 className="mb-10 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
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
            className="block font-medium text-black text-sm/6">
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
