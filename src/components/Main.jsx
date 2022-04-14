import Monitor from "../img/monitor.svg";
import Book from "../img/book.svg";
import Evaluacion from "../img/evaluacion.svg";
import Fuentes from "../img/fuentes.svg";
import Materiales from "../img/materiales.svg";
import Objetivo from "../img/objetivo.svg";
import Requerimientos from "../img/requerimientos.svg";
import Contacto from "./Contacto";

function Main() {
  return (
    <>
      <div className="bg-wave d-flex flex-column justify-content-center align-items-center">
        <div className="">
          <img src={Monitor} title="monitor" className="monitor" />
        </div>
        <h1 className="text-white p-3">Web Application Development</h1>
        <p className="text-white pb-3">
          Digital Didactic Resource (Polilibro) of Web Application Development
        </p>
      </div>
      <div className="mx-auto py-5" style={{ width: "80%" }}>
        <div
          className="bg-black mx-auto"
          style={{ width: 350, height: 350 }}
        ></div>
        <p className="text-justify mt-5">
        This learning unit contributes to the output profile of the Computer Systems Engineer, to develop the skills of analysis, design, implementation and evaluation of Web applications, as well as the development of strategic thinking, creative thinking, collaborative work, participatory work and assertive communication.
        </p>
        <br />
        <p className="">
        Therefore, we hope that this digital teaching resource will be a very useful tool for you to successfully complete this learning unit and that it will contribute not only to your academic training, but also to your professional and personal training.
        </p>{" "}
        <br />
        <p className="">
        For any questions or comments regarding this material, we recommend that you go to the contacts option where you will find the addresses and ways to get in touch with your teachers.
        </p>{" "}
        <br />
        <p>
        Rest assured that your questions, contributions or comments will be answered as soon as possible.
        </p>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Methodology</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img src={Book} alt="Libro" style={{ width: 150, height: 150 }} />
          </div>
          <div className="px-5">
            <p className="text-right">
            The contents of the Web Application Development Learning Unit are organized into four thematic units, as shown below:
              <br />
              <br />
              Unit I. Introduction to Web Applications
              <br />
              Unit II. Java Servlets
              <br />
              Unit III. Java Server Pages (JSP)
              <br />
              Unit IV. Frameworks.
              <br />
              <br />
              This resource is an educational support, in which you can find the development of the topics of each thematic unit that makes up the program, to view it you just have to select the content menu. You will also find Power Point presentations with the most relevant aspects of each topic, some videos that will inform you, ratify or expand the information, and different learning activities that you will find at the end of the topics, which you can download or work on on your own computer. We ask that you carry out these activities in a reflective manner and that the answers be argumentative (linking the topics, videos, readings with other areas of your experience) and this will allow you to improve your performance by putting into play the knowledge acquired, values, experiences, opinions, abilities, skills. <br /> <br />
              At the end of the development of the themes of each thematic unit you will find the evaluation option, where you can make an assessment of what you learned in each thematic unit; It is worth mentioning that this evaluation is only indicative so that you can corroborate the progress you have had during the development of each unit, so at the end of each evaluation we recommend that you verify why your answer was correct or not; Finally, we inform you that this evaluation, although it does not have a summative value for the qualification of your course, is very important because it will allow you to develop a self-managed attitude towards your learning.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Objective</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <h4>Objective of the RDD</h4> <br />
            <p>
            Promote autonomous and self-regulated learning, from a constructivist approach, in order for the student to develop projects that allow him to combine knowledge, skills, attitudes and values in a work context, using computer tools, and various learning techniques.
            </p>{" "}
            <br />
            <h4>Objective of the Learning Unit</h4>
            <br />
            <p>
            The student develops Web applications based on Java technology.
            </p>
          </div>
          <div className="my-auto">
            <img
              src={Objetivo}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Evaluation Criteria</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto mx-auto">
            <img
              src={Evaluacion}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className="text-center  mx-auto px-5">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th></th>
                  <th>First partial</th>
                  <th>Second partial</th>
                  <th>Third partial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Attendance</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Homework</td>
                  <td>20%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Exercises</td>
                  <td>20%</td>
                  <td>20%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Practices</td>
                  <td>20%</td>
                  <td>20%</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Quiz</td>
                  <td>20%</td>
                  <td>20%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Pojects</td>
                  <td>10%</td>
                  <td>20%</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>100%</td>
                  <td>100%</td>
                  <td>100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Requirements</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <p>
            So that you can access this resource, you can do it with any browser through any device.
            </p>
          </div>
          <div className="my-auto">
            <img
              src={Requerimientos}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
        </div>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Support Materials</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img
              src={Materiales}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div className="px-5">
            <p>
            In this section we put at your disposal the links of the materials that serve as support in the development of the course. With the purpose that you consult them individually or collectively and that you can download them in a memory or on your computer and you can use them at any time. <br />
              
            </p>
            <br />
            <a href="#" className="d-block text-decoration-none">Ver Presentaciones</a>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Reference Sources</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <p>
              Bauer C. King, G. (2007). Java Persistence with Hibernate. USA.
              Ed. Manning. ISBN: 978-19-3239-488-7.
            </p>
            <p>
              Brunner, R. (2003). JSP: Practical Guide for Programmers. USA. Ed.
              Morgan Kaufmann. ISBN: 1-55860- 836-2.
            </p>
            <p>
              Chopra, V. Li, S. Genender, J. (2008). Professional Apache Tomcat.
              USA. Ed. Willey. ISBN: 978-04-7175- 361-2.
            </p>
            <p>
              David, G. (2008). Core Java Server Faces (2nd. Ed.), USA. Pearson
              Education. ISBN: 978-81-3171-944-2
            </p>
            <p>
              Holmes, J. (2006). Struts: The Complete Reference. USA. Ed.
              McGraw-Hill. ISBN: 978-00-7226-386-2.
            </p>
          </div>
          <div className="my-auto">
            <img
              src={Fuentes}
              alt="Libro"
              style={{ width: 150, height: 150 }}
            />
          </div>
        </div>
      </div>
      <Contacto />
    </>
  );
}

export default Main;
