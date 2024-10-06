// App.jsx
import '../style/App.css';
import { Header } from './Header.jsx';
import Home from './Home.jsx';
import Solicitudes from './Solicitudes.jsx';
import Notificaciones from './Notificaciones.jsx';
import Configuraciones from './Configuraciones.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solicitudes" element={<Solicitudes />} />
            <Route path="/notificaciones" element={<Notificaciones />} />
            <Route path="/configuraciones" element={<Configuraciones />} />
          </Routes>
        </main>
      </>
    </Router>
  );
}
