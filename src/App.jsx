import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navegador from "./components/Navegador";
import Temario from "./components/Temario";
import U1 from "./components/U1";

function App() {
  return (
    <div>
      <div className="sticky-top">
        <Header />
        <Navegador />
      </div>
      <Main />
      {/* <Contacto />  */}
      {/* <Temario />  */}
      {/* <U1 /> */}
      <Footer />
    </div>
  );
}

export default App;
