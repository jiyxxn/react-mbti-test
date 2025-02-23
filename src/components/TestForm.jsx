import { useState } from 'react';
import { questions } from '../data/questions';
import useAddTest from '../hooks/useAddTest';
import QuestionLi from './QuestionLi';
import Button from './Button';

/**
 * @component TestForm
 * @description 사용자가 질문에 답하고, 결과를 제출할 수 있는 테스트 폼 컴포넌트
 * @param {Function} props.onPostResult - 테스트 결과를 처리하는 함수
 * @returns {JSX.Element} 질문 목록과 제출 버튼을 렌더링
 */
const TestForm = ({ onPostResult }) => {
  const [answers, setAnswers] = useState([]); // input radio 답변 모음
  const { isAddPending } = useAddTest();

  const onRadioChange = (e, id, type) => {
    setAnswers((prev) => {
      const existingAnswer = prev.find((answer) => answer.id === id);

      if (existingAnswer) {
        return prev.map((answer) =>
          answer.id === id ? { ...answer, answer: e.target.value } : answer
        );
      } else {
        return [
          ...prev,
          {
            id,
            type,
            answer: e.target.value,
          },
        ];
      }
    });
  };

  const onHandleAnswers = (e) => {
    e.preventDefault();
    onPostResult(answers);
  };

  return (
    <form
      action="#"
      method="post"
      className="p-4 py-10 bg-white border-gray-500 shadow-md md:p-20 md:py-14 rounded-xl"
      onSubmit={(e) => onHandleAnswers(e)}>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">
        {questions.map((question) => (
          <QuestionLi
            key={question.id}
            {...question}
            onRadioChange={onRadioChange}
          />
        ))}
      </ul>
      <Button
        type={'submit'}
        text={'결과보기'}
        isPending={isAddPending}></Button>
    </form>
  );
};

export default TestForm;
