import React, {useState, useEffect} from 'react';
import './header.css'

export function Header () {
  // Estado para controlar si el menú está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [esPantallaPequeña, setEsPantallaPequeña] = useState(window.innerWidth <= 500);

  // Actualizar el estado del tamaño de la pantalla
  useEffect(() => {
    const manejarResize = () => {
      setEsPantallaPequeña(window.innerWidth <= 590);
    };

    window.addEventListener('resize', manejarResize);
    return () => {
      window.removeEventListener('resize', manejarResize);
    };
  }, []);

  // Función para alternar el estado del menú
  const mostrarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };
  console.log("..---");
  console.log(esPantallaPequeña);
  return (
    // <h1 className='tw-headeros'>Lista de Contactos</h1>
    
    <header class="social-header">
      <div class="logo">
        <h1>UniVerse</h1>
      </div>
      {!esPantallaPequeña && (
        <div className="search-bar">
          <input type="text" placeholder="Buscar amigos, publicaciones..." />
          <button className="search-btn">🔍</button>
        </div>
      )}

      <button id="hamburger-btn" class="hamburger" onClick={mostrarMenu}>
        ☰
      </button>

      {/* <nav class="nav-icons"> */}
      <nav className={`nav-icons ${menuAbierto ? 'open' : ''}`}>
        {esPantallaPequeña && (
          <div className="search-bar">
            <input type="text" placeholder="Buscar amigos, publicaciones..." />
            <button className="search-btn">🔍</button>
          </div>
        )}
        <button class="nav-icon-btn">
          <span class="nav-icon">💬</span>
          <span class="nav-label">Chats</span>
        </button>
        <button class="nav-icon-btn">
          <span class="nav-icon">👥</span>
          <span class="nav-label">Solicitudes</span>
        </button>
        <button class="nav-icon-btn">
          <span class="nav-icon">🔔</span>
          <span class="nav-label">Notificaciones</span>
        </button>
        <button class="nav-icon-btn">
          <span class="nav-icon">⚙️</span>
          <span class="nav-label">Configuración</span>
        </button>
      </nav>

      <div class="user-profile">
        <img src="https://unavatar.io/niallodev" alt="Mi Perfil" class="user-avatar"/>
        <span class="user-name">Nicolas Alexander</span>
      </div>
    </header>

  )
}