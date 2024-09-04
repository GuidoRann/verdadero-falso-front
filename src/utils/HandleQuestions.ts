import axios from "axios";
import { useEffect, useState } from "react";
import { questionsProps } from "../types/questionsProps";

type props = {
  selectedCategory?: string;
  selectedAmount?: number;
};

export default function HandleQuestions({
  selectedCategory = "",
  selectedAmount = 3,
}: props) {
  const baseURL = "https://verdadero-falso.up.railway.app";
  const [questions, setQuestions] = useState<questionsProps[]>([]);
  let url = "";
  if (selectedCategory === "Random") {
    url = `${baseURL}/preguntas`;
  } else url = `${baseURL}/preguntasFiltradas?categoria=${selectedCategory}`;

  console.log(url);
  const saveQuestions = async () => {
    if (!selectedCategory) return;

    try {
      const results = await axios.get<questionsProps[]>(url);
      setQuestions(results.data);
    } catch (error) {
      console.error("Ha ocurrido un error: ", error);
    }
  };

  useEffect(() => {
    saveQuestions();
  }, []);

  const filteredQuestions = questions.slice(0, selectedAmount);

  return { questions: filteredQuestions };
}
