import React, { useRef, useEffect } from 'react';
import './Retro.css';

const RetroInput = () => {
  const textAreaRef = useRef(null);

  const autoGrow = () => {
    const el = textAreaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoGrow(); // ajusta altura inicial si hay texto
  }, []);

  return (
    <textarea
      ref={textAreaRef}
      className="retro-input"
      placeholder="> _"
      onInput={autoGrow}
      rows={1}
    />
  );
};

export default RetroInput;
