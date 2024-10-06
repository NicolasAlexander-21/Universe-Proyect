// Configuraciones.jsx
// import React from 'react';

// function Configuraciones() {
//   return <h2>Gestión de Configuraciones</h2>;
// }

// export default Configuraciones;


// Settings.jsx
import React, { useState } from 'react';
import '../style/Configuraciones.css';

function Configuraciones() {
  const [profile, setProfile] = useState({
    name: 'Nicolás Alexander Loor Bazurto',
    email: 'nicolas@example.com',
    password: '',
    profilePicture: 'https://via.placeholder.com/100', // Placeholder para foto de perfil
  });

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('light');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [accountPrivacy, setAccountPrivacy] = useState('public');

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handlePrivacyChange = (e) => {
    setAccountPrivacy(e.target.value);
  };

  return (
    <div className="settings-container">
      <h2 className="settings-title">Configuraciones</h2>

      <div className="profile-section">
        <h3 className="section-title">Perfil</h3>
        <div className="profile-info">
          <img src={profile.profilePicture} alt="Foto de perfil" className="profile-picture" />
          <div className="profile-details">
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleProfileChange}
              placeholder="Nombre"
              className="profile-input"
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleProfileChange}
              placeholder="Email"
              className="profile-input"
            />
            <input
              type="password"
              name="password"
              value={profile.password}
              onChange={handleProfileChange}
              placeholder="Nueva Contraseña"
              className="profile-input"
            />
          </div>
        </div>
        <button className="save-profile-btn">Guardar Cambios</button>
      </div>

      <div className="settings-options">
        <h3 className="section-title">Configuraciones del Sistema</h3>
        <div className="option">
          <label className="option-label">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
            />
            Habilitar Notificaciones
          </label>
        </div>
        <div className="option">
          <label className="option-label">
            Idioma:
            <select value={language} onChange={handleLanguageChange} className="language-select">
              <option value="es">Español</option>
              <option value="en">Inglés</option>
              <option value="fr">Francés</option>
            </select>
          </label>
        </div>
        <div className="option">
          <label className="option-label">
            Tema:
            <select value={theme} onChange={handleThemeChange} className="language-select">
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
            </select>
          </label>
        </div>
        <div className="option">
          <label className="option-label">
            <input
              type="checkbox"
              checked={twoFactorAuth}
              onChange={() => setTwoFactorAuth(!twoFactorAuth)}
            />
            Habilitar Autenticación de Dos Factores
          </label>
        </div>
        <div className="option">
          <label className="option-label">
            Privacidad de la Cuenta:
            <select value={accountPrivacy} onChange={handlePrivacyChange} className="language-select">
              <option value="public">Pública</option>
              <option value="private">Privada</option>
              <option value="friends">Solo Amigos</option>
            </select>
          </label>
        </div>
      </div>

      <div className="account-section">
        <h3 className="section-title">Configuraciones de la Cuenta</h3>
        <div className="option">
          <button className="delete-account-btn">Eliminar Cuenta</button>
        </div>
      </div>
    </div>
  );
}

export default Configuraciones;