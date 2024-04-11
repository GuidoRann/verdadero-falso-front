import { useState } from "react";
import { questionsProps } from "../types/questionsProps";


interface typeProps {
  onClose: () => void;
  onResponse: (res: boolean | null) => void;
  onQuestion: questionsProps;
  
}

export default function Questions({ onClose, onResponse, onQuestion}: typeProps ) {
  const [answered, setAnswered] = useState<number>(0);

  const handleTrueButton = () => {
    if (onQuestion?.validacion === "V") {
      setAnswered(answered + 1);
      onResponse(true);
    } else onResponse(false);
    onClose();
  };

  const handleFalseButton = () => {
    if (onQuestion?.validacion === "F") {
      setAnswered(answered + 1);
      onResponse(true);
    } else onResponse(false);

    onClose();
  };

 

  return (
    <div className="text-white h-2/3 flex flex-col gap-7 w-screen items-center">
      <div>
        <p className="text-3xl">{onQuestion?.pregunta}</p>
      </div>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleTrueButton()}
          className="bg-green-400 rounded-full w-28 h-12 font-bold"
        >
          Verdadero
        </button>
        <button
          onClick={() => handleFalseButton()}
          className="bg-red-400 rounded-full w-28 h-12 font-bold"
        >
          Falso
        </button>
      </div>
    </div>
  );
}