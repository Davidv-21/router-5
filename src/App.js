import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'; // Cambia la ruta de importación
import Tareas from './components/Tareas'; // Cambia la ruta de importación
import SobreNosotros from './components/SobreNosotros'; // Cambia la ruta de importación
import Menu from './components/Menu'; 

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Route path="/" exact component={Home} />
        <Route path="/tareas" component={Tareas} />
        <Route path="/sobre-nosotros" component={SobreNosotros} />
      </div>
    </Router>
  );
}

export default App;

