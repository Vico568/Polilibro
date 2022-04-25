import ObjetivoParticular from "../img/objetivoParticular.svg";
import Presentaciones from "../img/presentaciones.svg";
import EvaluacionUnidad from "../img/evaluacionUnidad.svg";
import { useState } from "react";
import Evaluacion from "./Evaluacion";
import preguntas from "../js/preguntas";
import Carrusel from "./Carrusel";

function U2() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  const [c7, setC7] = useState(0);
  const [c8, setC8] = useState(0);
  const [c9, setC9] = useState(0);
  const [c10, setC10] = useState(0);

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
      case 4:
        if (c4 == 1) {
          setC4(0);
        } else {
          setC4(1);
        }
        break;
      case 5:
        if (c5 == 1) {
          setC5(0);
        } else {
          setC5(1);
        }
        break;
      case 6:
        if (c6 == 1) {
          setC6(0);
        } else {
          setC6(1);
        }
        break;
      case 7:
        if (c7 == 1) {
          setC7(0);
        } else {
          setC7(1);
        }
        break;
      case 8:
        if (c8 == 1) {
          setC8(0);
        } else {
          setC8(1);
        }
        break;
      case 9:
        if (c9 == 1) {
          setC9(0);
        } else {
          setC9(1);
        }
        break;
      case 10:
        if (c10 == 1) {
          setC10(0);
        } else {
          setC10(1);
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
        <h2 className="text-white">Unit II - Java Servlets</h2>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center text-primary mb-5">Particular Objective</h2>
        <div
          className="d-flex justify-content-around mx-auto"
          style={{ width: "80%" }}
        >
          <div className="px-5">
            <p className="text-right">
              The student builds Web applications based on Java Servlet
              specification
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
              <h4 className="text-primary">2.1 Introduction to Servlets</h4>
              <div className="desplegable" onClick={() => handleMostrar(1)}>
                {c1 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}
              </div>
            </div>
            {c1 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
                <Carrusel unidad={8} />
              </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">
                2.2 Life Cycle and the Servlet API
              </h4>
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
                <Carrusel unidad={9} />
              </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">2.3 Context of HttpServlets</h4>
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
                <Carrusel unidad={10} />
              </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">2.3.1 Sessions</h4>
              <div className="desplegable" onClick={() => handleMostrar(5)}>
                {c5 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c5 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
                <Carrusel unidad={11} />
              </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">2.3.2 Cookies</h4>
              <div className="desplegable" onClick={() => handleMostrar(7)}>
                {c7 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c7 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
                <Carrusel unidad={12} />
              </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">2.4 Filters</h4>
              <div className="desplegable" onClick={() => handleMostrar(8)}>
                {c8 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c8 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
                <Carrusel unidad={13} />
              </div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">2.5 Connection pool</h4>
              <div className="desplegable" onClick={() => handleMostrar(9)}>
                {c9 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c9 == 1 ? (
              <div className="mx-auto" style={{ width: 600 }}>
                <Carrusel unidad={14} />
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
            <a
              href="https://drive.google.com/file/d/1PwFoxuk_poUrUltidE_r7rgk7hlh4WLx/view?usp=sharing"
              className="text-decoration-none"
              target="_blank"
            >
              Unit II - Java Servlets
            </a>
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Evaluation</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <p>
              Below is a list of assessments you can take to reinforce the
              knowledge you have gained in this learning unit.
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
        <hr className="mx-auto my-5" style={{ width: "90%" }} />

        <Evaluacion preguntas={preguntas[1]} />
      </div>
    </div>
  );
}

export default U2;
