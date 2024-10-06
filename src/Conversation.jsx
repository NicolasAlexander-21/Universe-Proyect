import React, { useEffect, useRef, useState } from 'react';
import './Conversation.css'

// Función simulada para obtener los mensajes del backend
const obtenerMensajesDesdeBackend = (userId) => {
  // Simulación de mensajes con estado de leído o no leído
  console.log(userId);
  //! Mandamos hacer la consulta al servidor con este id de la conservacion que se selecciono
  //! por el momento usamos este diccionario hasta construir el backend
  // Mensajes simulados hasta construir el backend
  // const mensajes =
  // Simulación de mensajes con estado de leído o no leído
  //! Tremos de 20 a 50 mensajes puede ser mas pero tenemos que ir probando 
  return [
    { id: 0, tipo: "rec", mensaje: "Hola, ¿cómo estás Nicolás?", leido: true },
    { id: 1, tipo: "emi", mensaje: "Estoy bien, gracias. ¿Y tú?", leido: true },
    { id: 2, tipo: "rec", mensaje: "Todo bien, estaba pensando en ir al cine este fin de semana. ¿Te gustaría venir?", leido: true },
    { id: 3, tipo: "emi", mensaje: "Suena genial, ¿qué película tienes en mente?", leido: true },
    { id: 4, tipo: "rec", mensaje: "Me gustaría ver la nueva película de ciencia ficción. Dicen que tiene muy buenas críticas.", leido: true },
    { id: 5, tipo: "emi", mensaje: "¡Perfecto! Me encanta la ciencia ficción. ¿A qué hora te gustaría ir?", leido: true },
    { id: 6, tipo: "rec", mensaje: "Pensaba en la función de las 7 p.m., así tenemos tiempo de cenar antes.", leido: true },
    { id: 7, tipo: "emi", mensaje: "¡Me parece una excelente idea! ¿Dónde nos encontramos?", leido: true },
    { id: 8, tipo: "rec", mensaje: "Podríamos vernos en la cafetería cerca del cine a las 6 p.m. ¿Te parece?", leido: true },
    { id: 9, tipo: "emi", mensaje: "Sí, suena perfecto. Entonces nos vemos el sábado a las 6.", leido: true },
    { id: 10, tipo: "rec", mensaje: "¡Genial! No olvides llegar con hambre, porque la comida en esa cafetería es deliciosa.", leido: true },
    { id: 11, tipo: "emi", mensaje: "Jaja, claro que sí. ¡Nos vemos entonces!", leido: true },
    { id: 12, tipo: "rec", mensaje: "Hasta luego, ¡que tengas un buen día!", leido: true },
    { id: 13, tipo: "emi", mensaje: "Igualmente, cuídate.", leido: false },
  ];
}


export function Conversation (userId){
  
  const [mensajes, setMensajes] = useState([]);
  // Último índice leído (simulado)
  // const [lastReadIndex, setLastReadIndex] = useState(null);  // Índice del último mensaje leído
  const chatContainerRef = useRef(null);
  // const lastMessageRef = useRef(null);

  useEffect(() => {
    // Simular la llamada al backend para obtener los mensajes del usuario
    const mensajesDesdeBackend = obtenerMensajesDesdeBackend(userId.userId);
    console.log("object",userId.userId);
    setMensajes(mensajesDesdeBackend);
  }, [userId]);
  console.log(mensajes);
  // Para desplazarse al final o al primer mensaje no leído
  useEffect(() => {
    const chatContainer = chatContainerRef.current;

    if (chatContainer) {
      const primerMensajeNoLeidoIndex = mensajes.findIndex(mensaje => !mensaje.leido);
      if (primerMensajeNoLeidoIndex !== -1) {
        // Hay mensajes no leídos, desplazar el scroll a la línea de "Mensajes no leídos"
        const unreadMessageElement = chatContainer.children[primerMensajeNoLeidoIndex];
        if (unreadMessageElement) {
          unreadMessageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } else if(!primerMensajeNoLeidoIndex !== -1){
        // No hay mensajes nuevos, desplazar el scroll al final
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [mensajes]);

  // Manejar el scroll para marcar los mensajes como leídos
  const handleScroll = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const isAtBottom =
        chatContainer.scrollHeight - chatContainer.scrollTop <= chatContainer.clientHeight + 10;

      if (isAtBottom) {
        // Marcar todos los mensajes como leídos si el usuario llega al final
        const mensajesActualizados = mensajes.map(mensaje => ({
          
          ...mensaje,
          leido: true
        }));
        setTimeout(() => {
          setMensajes(mensajesActualizados); //Ocultamos la linea despues de un tiempo  
        }, 2000);
        

        // Aquí se simula la actualización de mensajes en el backend
        // En un caso real, se haría una llamada PUT o PATCH al backend
        console.log("Mensajes marcados como leídos en el backend:", mensajesActualizados);
      }
    }
  };
 
  return (
    <div className="chat-container" ref={chatContainerRef} onScroll={handleScroll}>
      {mensajes.map((mensaje, index) => (
        <React.Fragment key={mensaje.id}>
          {!mensaje.leido && index === mensajes.findIndex(m => !m.leido) && (
            <div className="linea-no-leido">---- Mensajes no leídos ----</div>
          )}
          <div className={`mensaje ${mensaje.tipo === "emi" ? "mensaje-saliente" : "mensaje-entrante"}`}>
            {mensaje.mensaje}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
  
  // return (
  //   <div className="chat-container" ref={chatContainerRef} onScroll={handleScroll}>
  //     {mensajes.map((mensaje, index) => (
  //       <React.Fragment key={mensaje.id}>
  //         {/* Mostrar la línea de separación justo antes de los mensajes no leídos */}
  //         {lastReadIndex !== null && index === lastReadIndex + 1 && (
  //           <div className="linea-no-leido">---- Mensajes no leídos ----</div>
  //         )}
  //         <div
  //           ref={index === mensajes.length - 1 ? lastMessageRef : null} // Referencia al último mensaje
  //           className={`mensaje ${mensaje.tipo === "emi" ? "mensaje-saliente" : "mensaje-entrante"}`}
  //         >
  //           {mensaje.mensaje}
  //         </div>
  //       </React.Fragment>
  //     ))}
  //   </div>
  // );
}