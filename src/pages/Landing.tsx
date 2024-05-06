import { useState } from "react";
import Game from "./Game";

export default function Landing() {
  const [category, setCategory] = useState<string>("");
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
  const [isStating, setIsStarting] = useState<boolean>(false);

  const handleRestart = () => {
    setIsStarting(false);
  }

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center gap-20 text-white">
      {isStating ? (
        <Game
          category={category}
          questionsNumber={numberOfQuestions}
          restart={handleRestart}
        />
      ) : (
        <>
          <h1>Bienvenidos a Verdadero o falso</h1>
          <p>Elije una categoría</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setCategory("Naturaleza");
              }}
            >
              Naturaleza
            </button>
            <button
              onClick={() => {
                setCategory("Libros");
              }}
            >
              Libros
            </button>
            <button
              onClick={() => {
                setCategory("Cine");
              }}
            >
              Cine
            </button>
            <button
              onClick={() => {
                setCategory("Random");
              }}
            >
              Random
            </button>
          </div>
          <p>Elije la cantidad de preguntas</p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setNumberOfQuestions(10);
              }}
            >
              10
            </button>
            <button
              onClick={() => {
                setNumberOfQuestions(20);
              }}
            >
              20
            </button>
            <button
              onClick={() => {
                setNumberOfQuestions(25);
              }}
            >
              25
            </button>
            <button
              onClick={() => {
                setNumberOfQuestions(30);
              }}
            >
              30
            </button>
            <button
              onClick={() => {
                setIsStarting(true);
              }}
            >
              Empezar
            </button>
          </div>
        </>
      )}
    </div>
  );
}
