/**
 * @component Button
 * @description 버튼 컴포넌트로, 텍스트와 클릭 이벤트를 처리하며, 로딩 상태에서 비활성화 기능을 지원
 * @param {string} type - 버튼의 타입 (기본값: 'button')
 * @param {string} text - 버튼에 표시될 텍스트
 * @param {boolean} isPending - 로딩 상태에 따라 버튼을 비활성화할지 여부 (기본값: false)
 * @param {Function} onClick - 버튼 클릭 시 실행될 함수 (기본값: 빈 함수)
 * @returns {JSX.Element} 버튼 UI를 렌더링
 */
const Button = ({
  type = 'button',
  text,
  isPending = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`w-full p-4 mt-10 text-lg text-white bg-indigo-500 rounded-md hover:bg-indigo-700 ${
        isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
      }`}
      disabled={isPending}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
