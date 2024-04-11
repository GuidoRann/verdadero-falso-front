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
    <div className="flex flex-col items-center h-screen w-screen bg-[#222] text-white">
      <h1 className="pt-20 flex-1 h-1/3 font-bold text-cyan-500 text-5xl">
        Verdadero o Falso
      </h1>
      <p>Tu puntuacion actual es: {score}/{questions.length}</p>
      {isFinished ? (
        <div className="h-2/3">
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
