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
      <div className="h-[250px] pt-10 w-screen text-center">
        <h1 className="bg-gradient-to-br from-[#EB499D] to-[#8D5CF4] bg-clip-text text-transparent text-8xl font-black">
          Verdadero o Falso
        </h1>
        <p className="text-2xl pt-10">
          Tu puntuacion actual es: {score}/{questions.length}
        </p>
      </div>
      {isFinished ? (
        <div className="h-2/3 flex justify-center items-center">
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
