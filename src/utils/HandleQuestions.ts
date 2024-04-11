import axios from "axios";
import { useEffect, useState } from "react";
import { questionsProps } from "../types/questionsProps";


export default function HandleQuestions() {
  const urlBase = "http://localhost:8080/preguntas";
  const [questions, setQuestions] = useState<questionsProps[]>([]);

  const saveQuestions = async () => {
    const results = await axios.get<questionsProps[]>(`${urlBase}`);
    setQuestions(results.data);
  };
  
  useEffect(() => {
    saveQuestions();
  }, []);
  
  return { questions };
}
