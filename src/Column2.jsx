/* import React from 'react';
import { useText } from './TextContex';
import { useSearch } from './SearchContext';
import './index.css';

function Column2() {
  const { selectedText, selectedTitle } = useText();
  const { selectedData } = useSearch();

  console.log('selectedData in Column2:', selectedData);
  if (selectedData && selectedData.source === 'navbar') {
    
    console.log('Información seleccionada desde Navbar:', selectedData.payload);
  }

  return (
    <div className='Col-Main'>
      <h1 className='Col-title'>Welcome to my digital garden.</h1>
      <h2 className='Col-subtitle'> Hi there!!</h2>
      <hr className='span-Paraghap'/>
      <h1 className='Col-title2'>{selectedTitle}</h1>
      <p className='Col-contenedor'>
        {selectedTitle && selectedText && (
          <div className='Col-contenedor2'>
            <h2 className='Col-subtitle'>{selectedTitle}</h2>
            <p className='Col-Paraghap'>{selectedText}</p>
          </div>
        )}
      </p>
    </div>
  );
}

export default Column2;



 */

/* import React from 'react';
import { useText } from './TextContex';
import { useSearch } from './SearchContext';
import './index.css';

function Column2() {
  const { selectedText, selectedTitle } = useText();
  const { selectedData } = useSearch();

  console.log('selectedData in Column2:', selectedData);
  if (selectedData && selectedData.source === 'navbar') {
    console.log('Información seleccionada desde Navbar:', selectedData.payload);
  }

  // Verifica si se ha seleccionado un título y texto desde el searchContext
  const isSearchSelected = selectedData && selectedData.source === 'navbar';

  return (
    <div className='Col-Main'>
      <h1 className='Col-title'>Welcome to my digital garden.</h1>
      <h2 className='Col-subtitle'>Hi there!!</h2>
      <hr className='span-Paraghap' />
      {isSearchSelected ? (
        // Si se seleccionó información desde el searchContext, muestra esa información
        <div>
          <h1 className='Col-title2'>{selectedData.payload.title}</h1>
          <p className='Col-contenedor'>
            <div className='Col-contenedor2'>
              <h2 className='Col-subtitle'>{selectedData.payload.title}</h2>
              <p className='Col-Paraghap'>{selectedData.payload.text}</p>
            </div>
          </p>
        </div>
      ) : (
        // Si no se seleccionó información desde el searchContext, muestra la información del Slidebar
        <div>
          <h1 className='Col-title2'>{selectedTitle}</h1>
          <p className='Col-contenedor'>
            {selectedTitle && selectedText && (
              <div className='Col-contenedor2'>
                <h2 className='Col-subtitle'>{selectedTitle}</h2>
                <p className='Col-Paraghap'>{selectedText}</p>
              </div>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default Column2;

 */

import {useEffect} from 'react';
import { useText } from './TextContex';
import { useSearch } from './SearchContext';
import './index.css';

function Column2() {
  const { selectedText, selectedTitle } = useText();
  const { selectedData } = useSearch();

  useEffect(() => {
    // Tu lógica para actualizar el componente cuando cambien los contextos
    // Puedes agregar aquí cualquier lógica adicional que necesites para mostrar la información.
  }, [selectedText, selectedTitle, selectedData]);

  const isSearchSelected = selectedData && selectedData.source === 'navbar';

  return (
    <div className="Col-Main">
      <h1 className="Col-title">Welcome to my digital garden.</h1>
      <h2 className="Col-subtitle">Hi there!!</h2>
      <h3>The future can be hopeful!!</h3>
      <hr className="span-Paraghap" />
      {isSearchSelected ? (
        // Si se seleccionó información desde el SearchContext o Navbar, muestra esa información
        <div>
          <h1 className="Col-title2">{selectedData.payload.title}</h1>
          <p className="Col-contenedor">
            <div className="Col-contenedor2">
              <h2 className="Col-subtitle">{selectedData.payload.title}</h2>
              <p className="Col-Paraghap">{selectedData.payload.text}</p>
            </div>
          </p>
        </div>
      ) : (
        // Si no se seleccionó información desde el SearchContext o Navbar, muestra la información del Slidebar
        <div>
          <h1 className="Col-title2">{selectedTitle}</h1>
          <p className="Col-contenedor">
            {selectedTitle && selectedText && (
              <div className="Col-contenedor2">
                <h2 className="Col-subtitle">{selectedTitle}</h2>
                <p className="Col-Paraghap">{selectedText}</p>
              </div>
            )}
          </p>
        </div>
      )}
    </div>
  );
}

export default Column2;
