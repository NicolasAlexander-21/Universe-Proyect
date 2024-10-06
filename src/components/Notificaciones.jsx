// Notificaciones.jsx
import React from 'react';
import '../style/Notificaciones.css';

function Notificaciones() {
  const notifications = [
    {
      id: 1,
      title: 'Nuevo comentario en tu publicación',
      description: 'Juan Pérez ha comentado en tu publicación: "Excelente trabajo, sigue así!"',
      date: '2024-10-05',
      type: 'comment',
    },
    {
      id: 2,
      title: 'Solicitud de amistad aceptada',
      description: 'María López ha aceptado tu solicitud de amistad.',
      date: '2024-10-04',
      type: 'friend',
    },
    {
      id: 3,
      title: 'Nueva reacción a tu foto',
      description: 'Carlos Gómez reaccionó con "❤️" a tu última foto.',
      date: '2024-10-03',
      type: 'like',
    },
    {
      id: 4,
      title: 'Recordatorio de evento',
      description: 'Mañana tienes un evento: "Reunión con el equipo de desarrollo".',
      date: '2024-10-02',
      type: 'event',
    },
  ];

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notificaciones</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="notification-card">
          <div className="notification-icon">
            {notification.type === 'comment' && '💬'}
            {notification.type === 'friend' && '👥'}
            {notification.type === 'like' && '❤️'}
            {notification.type === 'event' && '📅'}
          </div>
          <div className="notification-content">
            <h3 className="notification-title">{notification.title}</h3>
            <p className="notification-description">{notification.description}</p>
            <span className="notification-date">{notification.date}</span>
          </div>
          <div className="notification-actions">
            <button className="mark-as-read-btn">Marcar como leída</button>
            <button className="delete-btn">Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
}

// import React from 'react';

// function Notificaciones() {
//   return <h2>Gestión de Notificaciones</h2>;
// }

export default Notificaciones;
