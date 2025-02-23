import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-8 p-10 pt-32 font-light xl:px-72 lg:px-46 md:px-26">
      <div>
        <h2 className="text-3xl font-bold text-center">MBTI 테스트</h2>
        <p className="pt-4">
          자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
        </p>
      </div>
      <ul className="flex flex-col gap-10 md:flex-row">
        <li className="px-6 py-8 rounded-lg shadow-md flex-1 bg-white transform hover:translate-y-[-6px] transition-transform duration-500">
          <h3 className="text-lg font-bold bg-[url('https://em-content.zobj.net/source/apple/391/clipboard_1f4cb.png')] bg-no-repeat bg-contain pl-8">
            MBTI 유형 검사
          </h3>
          <p className="mt-4">
            자신의 MBTI 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </li>
        <li className="px-6 py-8 rounded-lg shadow-md flex-1 bg-white transform hover:translate-y-[-6px] transition-transform duration-500">
          <h3 className="text-lg font-bold bg-[url('https://em-content.zobj.net/source/apple/391/light-bulb_1f4a1.png')] bg-no-repeat bg-contain pl-8">
            MBTI 유형 이해
          </h3>
          <p className="mt-4">
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </li>
        <li className="px-6 py-8 rounded-lg shadow-md flex-1 bg-white transform hover:translate-y-[-6px] transition-transform duration-500">
          <h3 className="text-lg font-bold bg-[url('https://em-content.zobj.net/source/apple/391/handshake-no-skin-tone-no-skin-tone_1faf1-200d-1faf2.png')] bg-no-repeat bg-contain pl-8">
            팀 평가
          </h3>
          <p className="mt-4">
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </li>
      </ul>
      <Button
        onClick={() => navigate('/test')}
        text={'내 MBTI 알아보러 가기'}
      />
    </div>
  );
};

export default Home;
