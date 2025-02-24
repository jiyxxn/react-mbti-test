import { useEffect } from 'react';

const KakaoShare = ({ description }) => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('e154444cc203d076bc4faefc65f5acd7');
    }
  }, []);

  const shareKakao = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '나의 MBTI는?',
        description: description,
        imageUrl: 'https://react-mbti-test-tawny.vercel.app/share_img.png',
        link: {
          mobileWebUrl: 'https://react-mbti-test-tawny.vercel.app/',
          webUrl: 'https://react-mbti-test-tawny.vercel.app/',
        },
      },
    });
  };

  return (
    <button onClick={shareKakao}>
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유하기"
        className="w-6"
      />
    </button>
  );
};

export default KakaoShare;
