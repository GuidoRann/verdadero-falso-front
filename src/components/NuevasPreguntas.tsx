import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NuevasPreguntas() {
  const navegation = useNavigate();

  const UrlBase = "http://localhost:8080/nuevaPregunta";

  type Preguntas = {
    pregunta: string;
    respuesta: string;
    validacion: string;
    categoria: string;
    urlImagen: string;
  };

  const [preguntas, setPreguntas] = useState<Preguntas>({
    pregunta: "",
    respuesta: "",
    validacion: "",
    categoria: "",
    urlImagen: "",
  });

  const { pregunta, respuesta, validacion, categoria, urlImagen } = preguntas;

  const onImputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setPreguntas({ ...preguntas, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(UrlBase, preguntas);
    navegation("/");
  };

  return (
    <div className="bg-[#2c2c2c] h-screen w-screen text-white">
      <div className="text-center font-bold text-2xl">
        <h3>Agregar Nueva Pregunta</h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="p-2 ">
          <label htmlFor="nombre" className="p-2">
            Preguntas
          </label>
          <input
            type="text"
            className="text-black w-[800px] "
            id="pregunta"
            name="pregunta"
            required={true}
            value={pregunta}
            onChange={(e) => onImputChange(e)}
          />
        </div>
        <div className="p-2">
          <label htmlFor="departamento" className="p-2">
            Respuesta
          </label>
          <input
            type="text"
            className="text-black w-[800px]"
            id="respuesta"
            name="respuesta"
            value={respuesta}
            onChange={(e) => onImputChange(e)}
          />
        </div>
        <div className="p-2">
          <label htmlFor="validacion" className="p-2">
            Validacion
          </label>
          <select
            className="text-black"
            id="validacion"
            value={validacion}
            name="validacion"
            onChange={(e) => onImputChange(e)}
          >
            <option value="">-</option>
            <option value="V">Verdadero</option>
            <option value="F">Falso</option>
          </select>
        </div>
        <div className="p-2">
          <label htmlFor="sueldo" className="p-2">
            Categoria
          </label>
          <input
            type="text"
            className="text-black"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => onImputChange(e)}
          />
        </div>
        <div className="p-2">
          <label htmlFor="sueldo" className="p-2">
            urlImg
          </label>
          <input
            type="text"
            className="text-black"
            id="urlImagen"
            name="urlImagen"
            value={urlImagen}
            onChange={(e) => onImputChange(e)}
          />
        </div>
        <div className="px-20 py-5 flex gap-3">
          <button type="submit" className="p-2 bg-green-400 rounded-xl">
            Agregar
          </button>
          <a href="/" className="p-2 bg-green-400 rounded-xl">
            Volver
          </a>
        </div>
      </form>
    </div>
  );
}
