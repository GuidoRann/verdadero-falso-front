import axios from "axios";
import { useEffect, useState } from "react";
import { questionsProps } from "../types/questionsProps";

interface propsTypes {
  category: string;
  questionsNumber: number;
}

export default function HandleQuestions({ category, questionsNumber }: propsTypes) {
  const baseURL = "http://localhost:8080/preguntas";
  const [questions, setQuestions] = useState<questionsProps[]>([]);

  const saveQuestions = async (category: string, questionsNumber: number) => {
    const results = await axios.get<questionsProps[]>(
      `${baseURL}?category=${category}&limit=${questionsNumber}`
    );
    setQuestions(results.data);
  };

  useEffect(() => {
    saveQuestions(category, questionsNumber);
  }, []);

  return { questions };
}
