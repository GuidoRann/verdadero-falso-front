import { questionsProps } from "../types/questionsProps";

interface typeProps {
  onAnswer: boolean | null;
  onBack: () => void;
  onQuestion: questionsProps;
  onIndexIncrement: () => void;
};


export default function Answers({ onAnswer, onBack, onQuestion, onIndexIncrement }: typeProps) {
  return (
    <div className="text-white flex flex-col gap-7 w-screen items-center justify-center">
      <div className="flex gap-3 justify-center">
        {onAnswer ? (
          <p className="text-3xl text-green-500">Respuesta correcta</p>
        ) : (
          <p className="text-3xl text-red-500">Respuesta incorrecta</p>
        )}
      </div>
      <div>
        <p className="text-xl">{onQuestion?.respuesta}</p>
      </div>
      <button className="bg-cyan-400 rounded-xl p-3" onClick={() => {
        onBack();
        onIndexIncrement();
      }}>
        Siguiente pregunta
      </button>
    </div>
  );
}
