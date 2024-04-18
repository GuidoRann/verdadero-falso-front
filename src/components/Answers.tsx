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
          <p className="text-4xl font-bold text-center text-green-500">
            Respuesta correcta
          </p>
        ) : (
          <p className="text-4xl font-bold text-center text-red-500">
            Respuesta incorrecta
          </p>
        )}
      </div>
      <p className="text-xl text-center px-5">{onQuestion?.respuesta}</p>
      <div className="w-screen flex justify-center pt-5">
        <button
          className="bg-cyan-600 rounded-xl p-3 hover:bg-cyan-500 font-medium"
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
