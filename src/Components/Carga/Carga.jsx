import React, { useEffect, useState } from 'react';
import './Carga.css';

const LoaderProyector = () => {
  const [playOut, setPlayOut] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const outTimer = setTimeout(() => setPlayOut(true), 3000); // Comienza transición
    const hideTimer = setTimeout(() => setVisible(false), 4000); // Elimina componente

    return () => {
      clearTimeout(outTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`loader-proyector ${playOut ? 'projector-exit' : ''}`}>
      <div className="projector-flash" />
      <div className="loader-text">Inicializando sistema...</div>
    </div>
  );
};

export default LoaderProyector;
