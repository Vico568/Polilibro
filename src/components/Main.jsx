import Monitor from "../img/monitor.svg";
import Book from "../img/book.svg";
import Evaluacion from "../img/evaluacion.svg";
import Fuentes from "../img/fuentes.svg";
import Materiales from "../img/materiales.svg";
import Objetivo from "../img/objetivo.svg";
import Requerimientos from "../img/requerimientos.svg";

function Main() {
  return (
    <>
      <div className="bg-wave d-flex flex-column justify-content-center align-items-center">
        <div className="">
          <img src={Monitor} title="monitor" className="monitor" />
        </div>
        <h1 className="text-white p-3">Web Application Development</h1>
        <p className="text-white pb-3">
          Recurso Didáctico Digital (Polilibro) de Web Application Development
        </p>
      </div>
      <div className="mx-auto py-5" style={{ width: "80%" }}>
        <div
          className="bg-black mx-auto"
          style={{ width: 350, height: 350 }}
        ></div>
        <p className="text-justify mt-5">
          Esta unidad de aprendizaje contribuye al perfil de salida del
          Ingeniero en Sistemas Computacionales, para desarrollar las
          habilidades de análisis, diseño, implementación y evaluación de
          aplicaciones Web, también desarrollo de pensamiento estratégico,
          pensamiento creativo, trabajo colaborativo, trabajo participativo y
          comunicación asertiva.
        </p>
        <br />
        <p className="">
          Por lo que esperamos que este recurso didáctico digital sea una
          herramienta de mucha utilidad para que curses con éxito esta unidad de
          aprendizaje y que contribuya no solo a tu formación académica, sino
          también a tu formación profesional y personal.
        </p>{" "}
        <br />
        <p className="">
          Para cualquier duda o comentario, en relación a este material, te
          recomendamos que vayas a la opción de contactos en la cual encontrarás
          las direcciones y formas de ponerte en contacto con tus profesores.
        </p>{" "}
        <br />
        <p>
          Ten la seguridad que tus dudas, aportaciones o comentarios serán
          atendidos a la mayor brevedad posible
        </p>
      </div>
      <div className="bg-light mx-auto py-5">
        <h2 className="text-center mb-5">Metodología</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="my-auto">
            <img src={Book} alt="Libro" style={{ width: 150, height: 150 }} />
          </div>
          <div className="px-5">
            <p className="text-right">
              Los contenidos de la Unidad de Aprendizaje de Gestión Empresarial
              están organizados en cinco unidades temáticas, como se muestra a
              continuación:
              <br />
              <br />
              Unidad temática I. Introducción a la gestión empresarial
              <br />
              Unidad temática II. Gestión estratégica de la empresa
              <br />
              Unidad temática III. Gestión operativa de la empresa
              <br />
              Unidad temática IV. Gestión del capital humano y la calidad
              <br />
              Unidad temática V. Retos de la gestión empresarial
              <br />
              <br />
              Este recurso es un apoyo educativo, en el cual podrás encontrar el
              desarrollo de los temas de cada unidad temática que conforma el
              programa, para visualizarlo tan solo debes seleccionar el menú de
              contenidos. Asimismo encontrarás presentaciones en Power Point con
              lo más relevante de cada tema, algunos videos que te informarán,
              ratificarán o ampliarán la información y diferentes actividades de
              aprendizaje que encontrarás al final de los temas, las podrás
              descargar o trabajar en tu misma computadora. Te solicitamos que
              dichas actividades las realices de manera reflexiva y que las
              respuestas sean argumentativas (vinculando los temas, videos,
              lecturas con otras áreas de tu experiencia) ya esto te permitirá
              mejorar tu desempeño al poner en juego los conocimientos
              adquiridos, valores, experiencias, opiniones, habilidades,
              destrezas. <br /> <br />
              Al término del desarrollo de los temas de cada unidad temática
              encontrarás la opción evaluación, donde podrás realizar una
              valoración de lo que aprendiste en cada unidad temática; cabe
              mencionar que esta evaluación es solamente un indicativo para que
              tú puedas corroborar el avance que has tenido durante el
              desarrollo de cada unidad, por lo que al término de cada
              evaluación te recomendamos verificar el por qué tu respuesta fue
              acertada o no; por último te informamos que esta evaluación aunque
              no tiene valor sumativo para la calificación de tu curso es muy
              importante porque te permitirá desarrollar una actitud autogestiva
              de tu aprendizaje.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Objetivos</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <h4>Objetivo del RDD </h4> <br />
            <p>
              Promover el aprendizaje autónomo y autoregulado, desde un enfoque
              constructivista, con la finalidad de que el estudiante desarrolle
              un proyecto empresarial que le permita conjugar los conocimientos,
              capacidades, actitudes y valores en un contexto laboral,
              utilizando herramientas informáticas, y diversas técnicas de
              aprendizaje tales como: discusiones dirigidas, trabajo
              colaborativo, construcción de ensayos argumentativos y comentarios
              en foros orientados a la socialización del conocimiento.
            </p>{" "}
            <br />
            <h4>Propósito de la Unidad de Aprendizaje</h4>
            <br />
            <p>
              El alumno desarrolle aplicaciones Web basadas en tecnología Java.
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
        <h2 className="text-center mb-5">Criterios de Evaluación</h2>
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
                  <th>Primer Parcial</th>
                  <th>Segundo Parcial</th>
                  <th>Tercer Parcial</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Asistencia</td>
                  <td>10%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Tareas</td>
                  <td>20%</td>
                  <td>10%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Ejercicios</td>
                  <td>20%</td>
                  <td>20%</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Prácticas</td>
                  <td>20%</td>
                  <td>20%</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>Exámen</td>
                  <td>20%</td>
                  <td>20%</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Proyectos</td>
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
        <h2 className="text-center mb-5">Requerimientos</h2>
        <div className="d-flex mx-auto" style={{ width: "80%" }}>
          <div className="px-5">
            <p>
              Para que puedas acceder a este recurso, lo podrás hacer con
              cualquier navegador a través de cualquier dispositivo.
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
        <h2 className="text-center mb-5">Materiales de apoyo</h2>
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
              En esta sección ponemos a tu disposición una carpeta Drive en la
              cual hemos organizado los archivos de los materiales que sirven de
              apoyo en el desarrollo del curso. Encontrarás un archivo con cinco
              presentaciones de Power Point ordenadas por unidad temática, con
              el propósito de que las consultes de forma individual o colectiva
              y que las puedas descargar en una memoria o en tu computadora y
              puedas recurrir a ellas en cualquier momento. <br />
              También encontrarás una lista con las direcciones electrónicas de
              los videos y los temas con los cuales se relacionan, un archivo
              PDF con el glosario de términos y por último una serie de lecturas
              y actividades de aprendizaje ordenadas por tema y unidad temática.
            </p>
            <br/>
            <p>Ver glosario</p>
            <p>Ver Presentaciones</p>
            <p>Ver Videos</p>
            <p>Ver Programa sintético</p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-5">
        <h2 className="text-center mb-5">Fuentes de consulta</h2>
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
    </>
  );
}

export default Main;
