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
        <div className="mx-auto shadow rounded my-4" style={{ width: 300, height: 200 }}>
          <div className="t1" style={{ height: "20%" }}></div>
          <div className="p-4" style={{ height: "80%" }}>
            <p>Unit I - Introduction to Web Applications</p>
          </div>
        </div>
        <div className="mx-auto shadow rounded my-4" style={{ width: 300, height: 200 }}>
          <div className="t1" style={{ height: "20%" }}></div>
          <div className="p-4" style={{ height: "80%" }}>
            <p>Unit II - Java Servlets</p>
          </div>
        </div>
        <div className="mx-auto shadow rounded my-4" style={{ width: 300, height: 200 }}>
          <div className="t1" style={{ height: "20%" }}></div>
          <div className="p-4" style={{ height: "80%" }}>
            <p>Unit III - Java Server Pages (JSP)</p>
          </div>
        </div>
        <div className="mx-auto shadow rounded my-4" style={{ width: 300, height: 200 }}>
          <div className="t1" style={{ height: "20%" }}></div>
          <div className="p-4" style={{ height: "80%" }}>
            <p>Unit IV - Frameworks</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temario;
