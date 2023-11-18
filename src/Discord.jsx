/* import React, { useState, useRef } from 'react';
import Discordimg from './assets/Discord.png';
import './index.css'; // Asegúrate de tener un archivo CSS para estilizar el popup

function Discord() {
  const [popupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const discRef = useRef(null);

  const handleImageClick = () => {
    setPopupVisible(!popupVisible);
  };

  const handleContainerClick = () => {
    if (popupVisible) {
      setPopupVisible(false);
    }
  };

  return (
    <div className='disc' ref={discRef} onClick={handleContainerClick}>
      <img
        src={Discordimg}
        alt="Discord-logo"
        onClick={handleImageClick}
      />
      {popupVisible && (
        <div className="popup" ref={popupRef}>
          <h2>¡Este es el popup!</h2>
          <p>Puedes hacer clic afuera o en la imagen para alternar su visibilidad o cerrarlo.</p>
        </div>
      )}
    </div>
  );
}

export default Discord;
 */

import React, { useState, useRef, useEffect } from 'react';
import Discordimg from './assets/Discord.png';
import './index.css'; // Asegúrate de tener un archivo CSS para estilizar el popup

function Discord() {
  const [popupVisible, setPopupVisible] = useState(false);
  const popupRef = useRef(null);
  const discRef = useRef(null);

  const handleImageClick = () => {
    setPopupVisible((prev) => !prev);
  };

  const handleContainerClick = (e) => {
    if (discRef.current && discRef.current.contains(e.target)) {
      return; // No hacer nada si el clic está dentro del contenedor de la imagen
    }

    setPopupVisible(false);
  };

  // Agregar un manejador de eventos para cerrar el popup al hacer clic fuera de él
  useEffect(() => {
    document.addEventListener('mousedown', handleContainerClick);

    return () => {
      document.removeEventListener('mousedown', handleContainerClick);
    };
  }, []);

  return (
    <div className='disc' ref={discRef}>
      <img
        src={Discordimg}
        alt="Discord-logo"
        onClick={handleImageClick}
      />
      {popupVisible && (
        <div className="popup" ref={popupRef} onClick={(e) => e.stopPropagation()}>
            <iframe className='dsciframe' src="https://discord.com/widget?id=1170444209698898094&theme=dark" width="550" height="340" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
        </div>
      )}
    </div>
  );
}

export default Discord;


