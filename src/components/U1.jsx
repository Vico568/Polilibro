import Book from "../img/book.svg";

function U1() {
  return (
    <div>
      <div
        className="bg-primary d-flex flex-column justify-content-center align-items-center"
        style={{ height: "40vh" }}
      >
        <h2 className="text-white">
          Unit I - Introduction to Web Applications
        </h2>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Objetivo Particular</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img src={Book} alt="Libro" style={{ width: 150, height: 150 }} />
          </div>
          <div className="px-5">
            <p className="text-right">
               The student determines the characteristics of Web applications based on J2EE specification
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Contenidos</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img src={Book} alt="Libro" style={{ width: 150, height: 150 }} />
          </div>
          <div className="px-5">
            <p>1.1 J2EE Architecture</p>
            <p>1.1.1 Multilayer architectures</p>
            <p>1.1.2 The J2EE standard</p>
            <p>1.2 Application Servers</p>
            <p>1.2.1 Web Servers</p>
            <p>1.2.2 Tomcat Application Server</p>
            <p>1.3 Structure of a Web application</p>
            <p>1.3.1 Directory Structure</p>
            <p>1.3.2 Configuration Files</p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Presentaciones</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img src={Book} alt="Libro" style={{ width: 150, height: 150 }} />
          </div>
          <div className="px-5">
            <p>Unit I - Introduction to Web Applications</p>
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Evaluación</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img src={Book} alt="Libro" style={{ width: 150, height: 150 }} />
          </div>
          <div className="px-5">
            <p>A continuación se muestra una lista con las evaluaciones que puedes realizar para reforzar los conocimientos que has adquirido en esta unidad de aprendizaje</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default U1;
