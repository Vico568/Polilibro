import ObjetivoParticular from "../img/objetivoParticular.svg";
import Presentaciones from "../img/presentaciones.svg";
import EvaluacionUnidad from "../img/evaluacionUnidad.svg";
import { useState } from "react";
import Evaluacion from "./Evaluacion";
import preguntas from "../js/preguntas";
import Carrusel from "./Carrusel";

function U4() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  const handleMostrar = (estado) => {
    switch (estado) {
      case 1:
        if (c1 == 1) {
          setC1(0);
        } else {
          setC1(1);
        }
        break;
      case 2:
        if (c2 == 1) {
          setC2(0);
        } else {
          setC2(1);
        }
        break;
      case 3:
        if (c3 == 1) {
          setC3(0);
        } else {
          setC3(1);
        }
        break;
    }
  };

  return (
    <div>
      <div
        className="bg-unidad d-flex flex-column justify-content-center align-items-center"
        style={{ height: "40vh" }}
      >
        <h2 className="text-white">
          Unit IV - Frameworks
        </h2>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center text-primary mb-5">Particular Objective</h2>
        <div
          className="d-flex justify-content-around mx-auto"
          style={{ width: "80%" }}
        >
          <div className="px-5">
            <p className="text-right">
            The student builds Web applications based on Java Frameworks
            </p>
          </div>
          <div className="my-auto">
            <img
              src={ObjetivoParticular}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center text-primary mb-5">Contents</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5" style={{ width: "100%" }}>
            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.1 Java Persistence API (JPA)</h4>
              <div className="desplegable" onClick={() => handleMostrar(1)}>
                {c1 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i className="bi bi-chevron-up"></i>
                )}
              </div>
            </div>
            {c1 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
              <Carrusel unidad={18} />
            </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.2 Struts</h4>
              <div className="desplegable" onClick={() => handleMostrar(2)}>
                {c2 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}
              </div>
            </div>
            {c2 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
              <Carrusel unidad={19} />
            </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.3 Java Server Faces (JSF)</h4>
              <div className="desplegable" onClick={() => handleMostrar(3)}>
                {c3 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c3 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
              <Carrusel unidad={20} />
            </div>
            ) : (
              <div></div>
            )}

          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Presentations</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img
              src={Presentaciones}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className="px-5">
            <a href="#" className="text-decoration-none">
              Unit IV - Frameworks
            </a>
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Evaluation</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <p>
            Below is a list of assessments you can take to reinforce the knowledge you have gained in this learning unit.
            </p>
          </div>
          <div className="my-auto">
            <img
              src={EvaluacionUnidad}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
        </div>
        {/* <hr className="mx-auto my-5" style={{width: '90%'}}/>
        
        <Evaluacion preguntas={preguntas[3]} /> */}
      </div>
    </div>
  );
}

export default U4;
