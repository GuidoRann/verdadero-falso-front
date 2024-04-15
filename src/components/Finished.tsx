type finishedProps = {
  finalScore: number;
};

export default function Finished({ finalScore }: finishedProps) {
  return (
    <div className="text-center py-20">
      <h1 className="text-lg text-white">
        Haz completado todas las preguntas
      </h1>
      <p className="text-white text-lg">Tu puntuacion es de {finalScore}</p>
    </div>
  );
}
