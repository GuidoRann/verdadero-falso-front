import { useState } from "react";
import Game from "./Game";
import Intro from "../components/Intro";

export default function Landing() {
  const [isStating, setIsStarting] = useState<boolean>(false);

  const handleRestart = () => {
    setIsStarting(false);
  };

  const handleStartGame = () => {
    setIsStarting(!isStating);
  };

  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center gap-20 text-white">
      {!isStating ? (
        <Intro startGame={handleStartGame} />
      ) : (
        <Game restart={handleRestart} />
      )}
    </div>
  );
}
