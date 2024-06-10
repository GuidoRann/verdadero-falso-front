import useStore from "../utils/Store";

interface startProp {
  startGame: () => void;
}

export default function Intro({ startGame }: startProp) {
  const {
    selectedCategory,
    selectedAmount,
    setSelectedCategory,
    setSelectedAmount,
  } = useStore();

  const categories = ["Naturaleza", "Ciencia", "Cine", "Musica", "Random"];
  const amounts = [5, 10, 15, 20];

  return (
    <div className="flex flex-col items-center h-screen w-screen text-white gap-14 font-">
      <div className="w-screen text-center pt-16 pb-5 flex flex-col items-center justify-center">
        <h1 className="bg-gradient-to-br from-[#EB499D] to-[#8D5CF4] bg-clip-text text-transparent text-8xl font-black">
          Verdadero o Falso
        </h1>
      </div>
      <p className="font-bold">Elije una categoría</p>
      <div className="flex gap-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`bg-purple-400 hover:bg-purple-600 px-3 py-2 text-purple-950  rounded-md font-bold ${
              selectedCategory === category ? "bg-purple-900" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <p className="font-bold">Elije la cantidad de preguntas</p>
      <div className="flex gap-2 py-1">
        {amounts.map((amount, index) => (
          <button
            key={index}
            onClick={() => setSelectedAmount(amount)}
            className={`bg-purple-400 hover:bg-purple-600 px-3 py-2 text-purple-950 rounded-md font-bold ${
              selectedAmount === amount ? "bg-purple-900" : ""
            }`}
          >
            {amount}
          </button>
        ))}
      </div>
      <button
        className="bg-purple-500 hover:bg-purple-700 rounded-lg px-5 py-3 text-purple-950 font-bold "
        onClick={startGame}
      >
        Empezar
      </button>
    </div>
  );
}
