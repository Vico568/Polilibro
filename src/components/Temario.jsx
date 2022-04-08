function Temario() {
  return (
    <div>
      <div
        className="bg-primary d-flex flex-column justify-content-center align-items-center"
        style={{ height: "40vh" }}
      >
        <h2 className="text-white">Unidades temáticas</h2>
        <p className="text-white">
          En este apartado podrás encontrar todas las unidades que se abordarán
          dentro del curso de Web Application Development
        </p>
      </div>
      <div className="regillaTemario bg-light">
        <div
          className="mx-auto shadow rounded my-4"
          style={{ width: 300, height: 200 }}
        >
          <a href="/temario/u1" className="text-decoration-none">
            <div className="t1" style={{ height: "20%" }}></div>
            <div className="p-4" style={{ height: "80%" }}>
              <h4 style={{ color: "rgb(1, 66, 104)" }}>
                Unidad I - Introduction to Web Applications
              </h4>
            </div>
          </a>
        </div>
        <div
          className="mx-auto shadow rounded my-4"
          style={{ width: 300, height: 200 }}
        >
          <a href="/temario/u2" className="text-decoration-none">
            <div className="t1" style={{ height: "20%" }}></div>
            <div className="p-4" style={{ height: "80%" }}>
              <h4 style={{ color: "rgb(1, 66, 104)" }}>
                Unidad II - Java Servlets
              </h4>
            </div>
          </a>
        </div>
        <div
          className="mx-auto shadow rounded my-4"
          style={{ width: 300, height: 200 }}
        >
          <a href="/temario/u3" className="text-decoration-none">
            <div className="t1" style={{ height: "20%" }}></div>
            <div className="p-4" style={{ height: "80%" }}>
              <h4 style={{ color: "rgb(1, 66, 104)" }}>
                Unidad III - Java Server Pages (JSP)
              </h4>
            </div>
          </a>
        </div>
        <div
          className="mx-auto shadow rounded my-4"
          style={{ width: 300, height: 200 }}
        >
          <a href="/temario/u4" className="text-decoration-none">
            <div className="t1" style={{ height: "20%" }}></div>
            <div className="p-4" style={{ height: "80%" }}>
              <h4 style={{ color: "rgb(1, 66, 104)" }}>
                Unidad IV - Frameworks
              </h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Temario;
