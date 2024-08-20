import { useState } from "react";
import { questionsProps } from "../types/questionsProps";

interface typeProps {
  onClose: () => void;
  onResponse: (res: boolean | null) => void;
  onQuestion: questionsProps;
  handleScore: () => void;
}

export default function Questions({
  onClose,
  onResponse,
  onQuestion,
  handleScore,
}: typeProps) {
  const [answered, setAnswered] = useState<number>(0);

  const handleTrueButton = () => {
    if (onQuestion?.validacion === "V") {
      setAnswered(answered + 1);
      onResponse(true);
      handleScore();
    } else onResponse(false);

    onClose();
  };

  const handleFalseButton = () => {
    if (onQuestion?.validacion === "F") {
      setAnswered(answered + 1);
      onResponse(true);
      handleScore();
    } else onResponse(false);

    onClose();
  };

  return (
    <div className="text-white flex flex-col justify-center gap-10">
      <div>
        <p className="text-3xl text-center">{onQuestion?.pregunta}</p>
      </div>
      <div className="flex justify-center gap-6 px-5">
        <button
          onClick={() => handleTrueButton()}
          className="bg-white rounded-full text-lg font-bold h-[120px] w-[120px] flex justify-center items-center border-[15px] border-green-500  hover:animate-tada"
        >
          <img src="/thumbs-up.svg" alt="verdadero" />
        </button>{" "}
        <button
          onClick={() => handleFalseButton()}
          className="bg-white rounded-full text-lg font-bold h-[120px] w-[120px] flex justify-center items-center border-[15px] border-red-500 hover:animate-tada"
        >
          <img src="/thumbs-down.svg" alt="verdadero" />
        </button>
      </div>
    </div>
  );
}
