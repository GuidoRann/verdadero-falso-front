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
    <div className="text-white flex flex-col gap-10 w-screen">
      <div>
        <p className="text-2xl text-center">{onQuestion?.pregunta}</p>
      </div>
      <div className="flex justify-center gap-3 px-5">
        <button
          onClick={() => handleTrueButton()}
          className="bg-green-400 rounded-full font-bold h-12 w-1/2"
        >
          Verdadero
        </button>
        <button
          onClick={() => handleFalseButton()}
          className="bg-red-400 rounded-full font-bold h-12 w-1/2"
        >
          Falso
        </button>
      </div>
    </div>
  );
}
