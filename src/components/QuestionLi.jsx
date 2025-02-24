/**
 * @component QuestionLi
 * @description 각 질문에 대한 옵션을 표시하고, 선택된 답변을 부모 컴포넌트로 전달하는 컴포넌트
 * @param {string} props.id - 질문의 고유 ID
 * @param {string} props.question - 질문 텍스트
 * @param {Array<string>} props.options - 선택지 배열
 * @param {string} props.type - 선택지 유형 (예: E/I/S/N/J/P)
 * @param {Function} props.onRadioChange - 라디오 버튼 값 변경 시 호출되는 함수
 * @returns {JSX.Element} 질문과 선택지를 렌더링하는 리스트 항목
 */
const QuestionLi = ({ id, question, options, type, onRadioChange }) => {
  const typeOptions = type.split('/');

  return (
    <li key={id} className="p-4 border-2 rounded-md md:p-8 border-slate-200">
      <p className="mb-4 text-lg">
        <span className="text-md">{id}. </span>
        {question}
      </p>
      <div className="flex flex-col gap-2">
        {options.map((option, index) => (
          <label
            key={option}
            htmlFor={option}
            className="relative flex items-center p-2 border-2 rounded-md cursor-pointer">
            <input
              required
              type="radio"
              name={id}
              id={option}
              value={typeOptions[index]} // type에 맞는 E/I/S/N/J/P 값을 value로 설정
              onChange={(e) => onRadioChange(e, id, type)}
              className="w-5 h-5 transition-all border rounded-full appearance-none cursor-pointer peer border-slate-300 checked:border-slate-800"
            />
            <span className="absolute w-5 h-5 transition-opacity duration-200 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 peer-checked:opacity-100 top-1/2 left-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-5">
                <path d="M2 6.342a3.375 3.375 0 0 1 6-2.088 3.375 3.375 0 0 1 5.997 2.26c-.063 2.134-1.618 3.76-2.955 4.784a14.437 14.437 0 0 1-2.676 1.61c-.02.01-.038.017-.05.022l-.014.006-.004.002h-.002a.75.75 0 0 1-.592.001h-.002l-.004-.003-.015-.006a5.528 5.528 0 0 1-.232-.107 14.395 14.395 0 0 1-2.535-1.557C3.564 10.22 1.999 8.558 1.999 6.38L2 6.342Z" />
              </svg>
            </span>
            <span className="ml-2 cursor-pointer text-slate-600 text-md">
              {option}
            </span>
          </label>
        ))}
      </div>
    </li>
  );
};

export default QuestionLi;
