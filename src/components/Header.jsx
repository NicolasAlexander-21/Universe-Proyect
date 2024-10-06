// Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import '../style/Header.css';
import { Link } from 'react-router-dom';

export function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [esPantallaPequeña, setEsPantallaPequeña] = useState(window.innerWidth <= 500);
  const menuRef = useRef(null); // Referencia para detectar clics fuera del menú

  useEffect(() => {
    const manejarResize = () => {
      setEsPantallaPequeña(window.innerWidth <= 590);
    };

    window.addEventListener('resize', manejarResize);
    return () => {
      window.removeEventListener('resize', manejarResize);
    };
  }, []);

  // Manejar clic fuera del menú
  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event);
      // console.log(event.target);
      console.log(menuRef);
      // console.log(!menuRef.current);
      // console.log(!menuRef.current.contains(event.target));
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuAbierto(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para alternar el estado del menú
  const mostrarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  // Función para ocultar el menú al hacer clic en una opción
  const ocultarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="social-header" ref={menuRef}>
      <div className="logo">
        <h1>UniVerse</h1>
      </div>
      {!esPantallaPequeña && (
        <div className="search-bar">
          <input type="text" placeholder="Buscar amigos, publicaciones..." />
          <button className="search-btn">🔍</button>
        </div>
      )}

      <button id="hamburger-btn" className="hamburger" onClick={mostrarMenu}>
        ☰
      </button>

      <nav className={`nav-icons ${menuAbierto ? 'open' : ''}`}>
        {esPantallaPequeña && (
          <div className="search-bar">
            <input type="text" placeholder="Buscar amigos, publicaciones..." />
            <button className="search-btn">🔍</button>
          </div>
        )}
        <Link to="./" className="nav-icon-btn" onClick={ocultarMenu}>
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Inicio</span>
        </Link>
        <Link to="./Solicitudes" className="nav-icon-btn" onClick={ocultarMenu}>
          <span className="nav-icon">👥</span>
          <span className="nav-label">Solicitudes</span>
        </Link>
        <Link to="./Notificaciones" className="nav-icon-btn" onClick={ocultarMenu}>
          <span className="nav-icon">🔔</span>
          <span className="nav-label">Notificaciones</span>
        </Link>
        <Link to="./Configuraciones" className="nav-icon-btn" onClick={ocultarMenu}>
          <span className="nav-icon">⚙️</span>
          <span className="nav-label">Configuración</span>
        </Link>
      </nav>

      <div className="user-profile">
        <img src="https://unavatar.io/niallodev" alt="Mi Perfil" className="user-avatar" />
        <span className="user-name">Nicolas Alexander</span>
      </div>
    </header>
  );
}
