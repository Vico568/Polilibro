import { useState, useEffect } from "react";

function Evaluacion({preguntas}) {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  function handleAnswerSubmit(isCorrect, e) {
    if (isCorrect) {
      setPuntuación(puntuación + 1);
    }

    e.target.classList.remove('btn-outline-primary');
    e.target.classList.add(isCorrect ? 'btn-outline-success' : 'btn-outline-danger');

    setTimeout(() => {
      if (preguntaActual == preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 500);
  }

  if (isFinished) {
    return (
      <div
        className="d-flex flex-column align-items-center justify-content-around shadow rounded mx-auto" style={{width: 900, height: 200}}>
      
          <p>
            Obtuviste {puntuación} de {preguntas.length}
          </p>
          <a href="/temario/u1">Volver</a>
      </div>
    );
  }

  return (
      <div className="d-flex flex-column justify-content-around shadow rounded mx-auto" style={{width: 900}}>
        <h2 className="text-center py-3">Quiz</h2>
        <div className="d-flex justify-content-around">
        <div className="d-flex flex-column" style={{width: '50%'}}>
          <p className="text-center my-5">
            Pregunta {preguntaActual + 1} de {preguntas.length}
          </p>
          <p className="text-center">{preguntas[preguntaActual].titulo}</p>
        </div>
        <div className="d-flex flex-column align-items-center py-5" style={{width: '50%'}}>
          {preguntas[preguntaActual].opciones.map((respuesta) => (
            <button
              key={respuesta.textoRespuesta}
              onClick={(e) => handleAnswerSubmit(respuesta.isCorrect, e)}
              className="btn btn-outline-primary mb-2"
              style={{width: '80%'}}
            >
              {respuesta.textoRespuesta}
            </button>
          ))}
        </div>
        </div>
      </div>
  );
}

export default Evaluacion;
