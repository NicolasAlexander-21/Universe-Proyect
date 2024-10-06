import React, { useState, useEffect } from 'react';
import './chatInterface.css';
import {Conversation} from './Conversation.jsx'

export function ChatInterface() {
  // Estado para almacenar las conversaciones
  const [conversaciones, setConversaciones] = useState([
    { id: 1, foto: 'https://unavatar.io/niallodev', nombre: 'Elian Joel Minaya Sanchez', ultimoMensaje: '¿Cómo estás?'
        // {
        //   "rec":"Hola, ¿cómo estás?",
        //   "emi":"Estoy bien, gracias. ¿Y tú?",
        //   "rec":"Todo bien, estaba pensando en ir al cine este fin de semana. ¿Te gustaría venir?",
        //   "emi":"Suena genial, ¿qué película tienes en mente?",
        //   "rec":"Me gustaría ver la nueva película de ciencia ficción. Dicen que tiene muy buenas críticas.",
        //   "emi":"¡Perfecto! Me encanta la ciencia ficción. ¿A qué hora te gustaría ir?",
        //   "rec":"Pensaba en la función de las 7 p.m., así tenemos tiempo de cenar antes.",
        //   "emi":"¡Me parece una excelente idea! ¿Dónde nos encontramos?",
        //   "rec":"Podríamos vernos en la cafetería cerca del cine a las 6 p.m. ¿Te parece?",
        //   "emi":"Sí, suena perfecto. Entonces nos vemos el sábado a las 6.",
        //   "rec":"¡Genial! No olvides llegar con hambre, porque la comida en esa cafetería es deliciosa.",
        //   "emi":"Jaja, claro que sí. ¡Nos vemos entonces!",
        //   "rec":"Hasta luego, ¡que tengas un buen día!",
        //   "emi":"Igualmente, cuídate.",
        // }
      
    },
    { id: 2, foto: 'https://unavatar.io/niallodev', nombre: 'Edgar Uriel Villavicencio Medina', ultimoMensaje: '¡Vamos a salir!'},
    { id: 3, foto: 'https://unavatar.io/niallodev', nombre: 'Adrian Abril Estevan Pesantez', ultimoMensaje: 'Te envié los archivos.'}
  ]);

  // Estado para almacenar la conversación seleccionada
  const [conversacionSeleccionada, setConversacionSeleccionada] = useState(null);
  const [pantallaPequena, setPantallaPequena] = useState(window.innerWidth <= 610);
  const alt_foto = conversacionSeleccionada?.nombre 
  ? `Foto_Perfil_${conversacionSeleccionada.nombre}` 
  : "No hay foto de perfil";
  
  useEffect(() => {
    const manejarRedimension = () => {
      setPantallaPequena(window.innerWidth <= 610);
    };
    window.addEventListener('resize', manejarRedimension);
    return () => {
      window.removeEventListener('resize', manejarRedimension);
    };
  }, []);

  // Función para manejar la selección de una conversación
  const seleccionarConversacion = (id) => {
    const conversacion = conversaciones.find((conv) => conv.id === id);
    
    setConversacionSeleccionada(conversacion);
  };

  const volverAConversaciones = () => {
    setConversacionSeleccionada(null);
  };
  return (
    <div className="chat-interface">
      {/* Lista de conversaciones */}
      {!pantallaPequena || !conversacionSeleccionada ? (
        <div className="conversations-list">
          <h3>Conversaciones</h3>
          <ul>
            {conversaciones.map((conversacion) => (
              
              <li
                key={conversacion.id}
                onClick={() => seleccionarConversacion(conversacion.id)}
                className={conversacionSeleccionada?.id === conversacion.id ? 'selected' : ''}
              >
                
                <div className="conversation-info">
                  <img className='conversation-info-foto' src={conversacion.foto} alt="" />
                  <div>
                    <h4>{conversacion.nombre}</h4>
                    <p>{conversacion.ultimoMensaje}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Ventana de conversación */}
      {(pantallaPequena && conversacionSeleccionada) || !pantallaPequena ? (
        <div className="chat-window">
          {conversacionSeleccionada ? (
            <>
              
              <div className="chat-header">
                  <div className='chat-back'>
                  
                  {pantallaPequena && (
                    <button className="back-button" onClick={volverAConversaciones}>
                      {/* Volver a conversaciones */}
                      {/* ← */}
                      {/* ◀️ */}
                      {/* ⬅ */}
                      {/* ➭ */}
                      ➯
                    </button>

                  )}
                  <div className='chat-info' title="Perfil">
                    <img className='chat-info-foto' src={conversacionSeleccionada.foto} alt={alt_foto} />
                    <h4>{conversacionSeleccionada.nombre}</h4>
                  </div>
                </div>

                <div className="chat-options">
                  <button className="option-btn" title="Videollamada">
                    📹
                  </button>
                  <button className="option-btn" title="Llamada">
                    📞
                  </button>
                  <button className="option-btn" title="Más opciones">
                    ⋮
                  </button>
                </div>
              </div>
              <div className="chat-messages">
                {/* <p>Mensajes de la conversación con {conversacionSeleccionada.nombre}</p> */}
                <Conversation userId={conversacionSeleccionada.id} ></Conversation>

              </div>
              <div className="chat-input">
                <input type="text" placeholder="Escribe un mensaje..." />
                <button>Enviar</button>
              </div>
            </>
          ) : (
            <div className="no-chat-selected">
              <p>Selecciona una conversación para empezar a chatear.</p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}