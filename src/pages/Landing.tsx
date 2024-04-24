import { useState } from "react";
import Questions from "../components/Questions";
import Answers from "../components/Answers";
import HandleQuestions from "../utils/HandleQuestions";
import Finished from "../components/Finished";

export default function Landing() {
  const [answered, setAnswered] = useState<boolean>(true);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);

  const { questions } = HandleQuestions();

  const actualQuestion = questions[indexQuestion];

  const handleChangeIndex = () => {
    if (indexQuestion < questions.length - 1) {
      setIndexQuestion(indexQuestion + 1);
    } else setIsFinished(false);
  };

  const handleContestada = () => {
    setAnswered(false);
  };

  const handleRespuesta = (res: boolean | null) => {
    setCorrect(res);
  };

  const handleVolver = () => {
    setAnswered(true);
  };

  const handleScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="flex flex-col items-center h-screen w-screen text-white">
      <div className="w-screen text-center h-1/3 flex flex-col items-center gap-14 justify-center ">
        <h1 className="bg-gradient-to-br from-[#EB499D] to-[#8D5CF4] bg-clip-text text-transparent text-8xl font-black">
          Verdadero o Falso
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center text-gray-700 bg-white h-32 w-32 rounded-xl">
        <p className="text-3xl font-semibold tracking-widest">Score</p>
        <span className="text-6xl font-bold">
          {score}/{questions.length}
        </span>
      </div>
      {isFinished ? (
        <div className="flex justify-center items-center w-[700px] h-[300px]">
          {answered ? (
            <Questions
              onClose={handleContestada}
              onResponse={handleRespuesta}
              onQuestion={actualQuestion}
              handleScore={handleScore}
            />
          ) : (
            <Answers
              onAnswer={correct}
              onBack={handleVolver}
              onQuestion={actualQuestion}
              onIndexIncrement={handleChangeIndex}
            />
          )}
        </div>
      ) : (
        <Finished finalScore={score} />
      )}
    </div>
  );
}
