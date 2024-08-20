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
    <div className="flex flex-col gap-10">
      <div className="">
        {onAnswer ? (
          <p className="text-5xl font-bold text-center text-green-500">
            Respuesta correcta
          </p>
        ) : (
          <p className="text-5xl font-bold text-center text-red-500">
            Respuesta incorrecta
          </p>
        )}
      </div>
      <p className="text-2xl text-center px-5">{onQuestion?.respuesta}</p>
      <div className="w-screen flex justify-center pt-5">
        <button
          className="hover:bg-purple-400 bg-purple-600 text-white px-3 py-3 rounded-lg font-bold"
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
