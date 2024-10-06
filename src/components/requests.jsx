import React, { useState } from 'react';
import '../style/requests.css';
import { FaCheckCircle, FaTimesCircle, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

export function Requests() {
  const [requests, setRequests] = useState([
    { 
      id: 1, 
      name: 'Juan Pérez', 
      occupation: 'Desarrollador Frontend', 
      location: 'Quito, Ecuador', 
      description: 'Apasionado por la tecnología y el diseño web. Me encanta trabajar en equipo y aprender cosas nuevas.',
      date: '2024-10-01',
      status: 'pending', 
      avatar: 'https://i.pravatar.cc/150?img=1' 
    },
    { 
      id: 2, 
      name: 'María Gómez', 
      occupation: 'Ingeniera de Datos', 
      location: 'Guayaquil, Ecuador', 
      description: 'Especialista en datos y analítica con experiencia en ETL y Python.',
      date: '2024-10-02',
      status: 'pending', 
      avatar: 'https://i.pravatar.cc/150?img=2' 
    },
    { 
      id: 3, 
      name: 'Carlos Sánchez', 
      occupation: 'Analista de Sistemas', 
      location: 'Cuenca, Ecuador', 
      description: 'Disfruto de la resolución de problemas y la automatización de procesos.',
      date: '2024-10-03',
      status: 'pending', 
      avatar: 'https://i.pravatar.cc/150?img=3' 
    },
  ]);

  const handleAccept = (id) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: 'accepted' } : request
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(request =>
      request.id === id ? { ...request, status: 'rejected' } : request
    ));
  };

  return (
    <div className="requests-container">
      <h2>Solicitudes de Amistad</h2>
      <ul className="requests-list">
        {requests.map((request) => (
          <li key={request.id} className={`request-item ${request.status}`}>
            <div className="request-info">
              <img src={request.avatar} alt={`${request.name} avatar`} className="request-avatar" />
              <div className="request-details">
                <span className="request-name">{request.name}</span>
                <span className="request-occupation">
                  <FaBriefcase /> {request.occupation}
                </span>
                <span className="request-location">
                  <FaMapMarkerAlt /> {request.location}
                </span>
                <span className="request-description">{request.description}</span>
                <span className="request-date">Solicitud enviada el: {request.date}</span>
                <span className={`request-status ${request.status}`}>
                  {request.status === 'pending' ? 'Pendiente' : request.status === 'accepted' ? 'Aceptada' : 'Rechazada'}
                </span>
              </div>
            </div>
            {request.status === 'pending' && (
              <div className="request-actions">
                <button className="accept-btn" onClick={() => handleAccept(request.id)}>
                  <FaCheckCircle /> Aceptar
                </button>
                <button className="reject-btn" onClick={() => handleReject(request.id)}>
                  <FaTimesCircle /> Rechazar
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
