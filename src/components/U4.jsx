import ObjetivoParticular from "../img/objetivoParticular.svg";
import Presentaciones from "../img/presentaciones.svg";
import EvaluacionUnidad from "../img/evaluacionUnidad.svg";
import { useState } from "react";

function U4() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);

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
    }
  };

  return (
    <div>
      <div
        className="bg-primary d-flex flex-column justify-content-center align-items-center"
        style={{ height: "40vh" }}
      >
        <h2 className="text-white">
          Unit IV - Frameworks
        </h2>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center text-primary mb-5">Objetivo Particular</h2>
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
        <h2 className="text-center text-primary mb-5">Contenidos</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.1 Model-View-Controller design pattern</h4>
              <div className="desplegable" onClick={() => handleMostrar(1)}>
                {c1 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}
              </div>
            </div>
            {c1 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.2 Basics of STRUTS framework</h4>
              <div className="desplegable" onClick={() => handleMostrar(2)}>
                {c2 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}
              </div>
            </div>
            {c2 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.3 Developing Applications with STRUTS</h4>
              <div className="desplegable" onClick={() => handleMostrar(3)}>
                {c3 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c3 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.4 Hibernate</h4>
              <div className="desplegable" onClick={() => handleMostrar(4)}>
                {c4 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c4 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">4.5 Java Server Faces (JSF)</h4>
              <div className="desplegable" onClick={() => handleMostrar(5)}>
                {c5 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c5 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}
            
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Presentaciones</h2>
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
        <h2 className="text-center mb-5">Evaluación</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <p>
              A continuación se muestra una lista con las evaluaciones que
              puedes realizar para reforzar los conocimientos que has adquirido
              en esta unidad de aprendizaje
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
      </div>
    </div>
  );
}

export default U4;
