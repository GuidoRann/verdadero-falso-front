type finishedProps = {
  finalScore: number;
  restart: () => void;
};

export default function Finished({ finalScore, restart }: finishedProps) {
  return (
    <div className="text-center py-14">
      <h1 className="text-5xl font-bold text-white py-10">
        Haz completado todas las preguntas
      </h1>
      <p className="text-white text-3xl py-7">
        Respondiste bien
        <span className="font-bold px-2 text-purple-400">{finalScore}</span>
        preguntas
      </p>
      <button
        className="hover:bg-purple-400 bg-purple-600 text-white px-3 py-3 rounded-lg font-bold"
        onClick={restart}
      >
        Volver al inicio
      </button>
    </div>
  );
}
