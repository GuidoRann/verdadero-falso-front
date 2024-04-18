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
        <p className="text-2xl text-center">{onQuestion?.pregunta}</p>
      </div>
      <div className="flex justify-center gap-3 px-5">
        <button
          onClick={() => handleTrueButton()}
          className="bg-green-500 hover:bg-green-400 rounded-full text-lg font-bold h-12 w-28"
        >
          Verdadero
        </button>
        <button
          onClick={() => handleFalseButton()}
          className="bg-red-500 hover:bg-red-400 rounded-full text-lg font-bold h-12 w-28"
        >
          Falso
        </button>
      </div>
    </div>
  );
}
