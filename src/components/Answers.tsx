import { questionsProps } from "../types/questionsProps";

interface typeProps {
  onAnswer: boolean | null;
  onBack: () => void;
  onQuestion: questionsProps;
  onIndexIncrement: () => void;
}

export default function Answers({
  onAnswer,
  onBack,
  onQuestion,
  onIndexIncrement,
}: typeProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="">
        {onAnswer ? (
          <p className="text-2xl font-bold text-center text-green-500">
            Respuesta correcta
          </p>
        ) : (
          <p className="text-2xl font-bold text-center text-red-500">
            Respuesta incorrecta
          </p>
        )}
      </div>
      <p className="text-base text-center px-5">{onQuestion?.respuesta}</p>
      <div className="w-screen flex justify-center pt-5">
        <button
          className="bg-cyan-400 rounded-xl p-3 w-[80%]"
          onClick={() => {
            onBack();
            onIndexIncrement();
          }}
        >
          Siguiente pregunta
        </button>
      </div>
    </div>
  );
}
