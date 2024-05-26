import { useState } from "react";
import Questions from "../components/Questions";
import Answers from "../components/Answers";
import HandleQuestions from "../utils/HandleQuestions";
import Finished from "../components/Finished";
import useStore from "../utils/Store";

interface propsTypes {
  restart: () => void;
}

export default function Landing({ restart }: propsTypes) {
  const [answered, setAnswered] = useState<boolean>(true);
  const [correct, setCorrect] = useState<boolean | null>(null);
  const [indexQuestion, setIndexQuestion] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(true);
  const [score, setScore] = useState<number>(0);

  const { selectedCategory, selectedAmount } = useStore();

  const { questions } = HandleQuestions({ selectedCategory, selectedAmount });

  console.log("cantidad", selectedAmount);
  console.log("categoria", selectedCategory);

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
      {isFinished ? (
        <div className="flex justify-center items-center w-[700px] h-[300px] pt-32">
          {answered ? (
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col py-3 items-center text-gray-700 bg-white h-28 w-28 rounded-xl">
                <p className="text-2xl font-bold tracking-wide text-cyan-700">
                  Score
                </p>
                <span className="text-5xl font-bold ">
                  {score}/{questions.length}
                </span>
              </div>
              <Questions
                onClose={handleContestada}
                onResponse={handleRespuesta}
                onQuestion={actualQuestion}
                handleScore={handleScore}
              />
            </div>
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
        <Finished finalScore={score} restart={restart} />
      )}
    </div>
  );
}
