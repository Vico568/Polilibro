import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Navegador from "./components/Navegador";
import Temario from "./components/Temario";
import U1 from "./components/U1";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}/>
        </Route>

        <Route path="/temario" element={<Layout />}>
          <Route index element={<Temario />} />
          <Route path="u1" element={<U1 />} />
          <Route path="u2" element={<U2 />} />
          <Route path="u3" element={<U3 />} />
          <Route path="u4" element={<U4 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
