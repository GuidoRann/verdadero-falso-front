type finishedProps = {
  finalScore: number;
};

export default function Finished({ finalScore }: finishedProps) {
  return (
    <div className="h-2/3">
      <h1 className="text-5xl text-white">
        Haz completado todas las preguntas
      </h1>
      <p className="text-2xl text-white">Tu puntuacion es de {finalScore}</p>
    </div>
  );
}
