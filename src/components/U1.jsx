import ObjetivoParticular from "../img/objetivoParticular.svg";
import Presentaciones from "../img/presentaciones.svg";
import EvaluacionUnidad from "../img/evaluacionUnidad.svg";
import { useState } from "react";

function U1() {
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);
  const [c4, setC4] = useState(0);
  const [c5, setC5] = useState(0);
  const [c6, setC6] = useState(0);
  const [c7, setC7] = useState(0);
  const [c8, setC8] = useState(0);

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
    }
  };

  return (
    <div>
      <div
        className="bg-unidad d-flex flex-column justify-content-center align-items-center"
        
      >
        <h2 className="text-white">
          Unit I - Introduction to Web Applications
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
              The student determines the characteristics of Web applications
              based on J2EE specification
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
          <div className="px-5">
            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">1.1 J2EE Architecture</h4>
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
              <h4 className="text-primary">1.1.1 Multilayer architectures</h4>
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
              <h4 className="text-primary">1.1.2 The J2EE standard</h4>
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
              <h4 className="text-primary">1.2 Application Servers</h4>
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
              <h4 className="text-primary">1.2.2 Tomcat Application Server</h4>
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

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">
                1.3 Structure of a Web application
              </h4>
              <div className="desplegable" onClick={() => handleMostrar(6)}>
                {c6 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c6 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">1.3.1 Directory Structure</h4>
              <div className="desplegable" onClick={() => handleMostrar(7)}>
                {c7 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c7 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
            ) : (
              <div></div>
            )}

            <div className="d-flex align-items-center mb-3">
              <h4 className="text-primary">1.3.2 Configuration Files</h4>
              <div className="desplegable" onClick={() => handleMostrar(8)}>
                {c8 == 0 ? (
                  <i className="bi bi-chevron-down"></i>
                ) : (
                  <i class="bi bi-chevron-up"></i>
                )}{" "}
              </div>
            </div>
            {c8 == 1 ? (
              <div className="bg-black" style={{ width: 50, height: 50 }}></div>
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
              Unit I - Introduction to Web Applications
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
      </div>
    </div>
  );
}

export default U1;
