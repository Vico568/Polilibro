function Temario() {
  return (
    <div>
      <div
        className="bg-temario d-flex flex-column justify-content-center align-items-center"
      >
        <h2 className="text-white">Thematic Units</h2>
        <p className="text-white my-3">
        In this section you will find all the units that will be covered in the Web Application Development course
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
              <h4 className="title-temario" style={{ color: "rgb(1, 66, 104)" }}>
                Unit I - Introduction to Web Applications
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
              <h4 className="title-temario" style={{ color: "rgb(1, 66, 104)" }}>
                Unit II - Java Servlets
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
              <h4 className="title-temario" style={{ color: "rgb(1, 66, 104)" }}>
                Unit III - Java Server Pages (JSP)
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
              <h4 className="title-temario" style={{ color: "rgb(1, 66, 104)" }}>
                Unit IV - Frameworks
              </h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Temario;
