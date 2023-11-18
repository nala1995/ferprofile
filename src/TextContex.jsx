import React, { createContext, useContext, useState } from 'react';

const TextContext = createContext();

export function TextProvider({ children }) {
  const [selectedText, setSelectedText] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');

  return (
    <TextContext.Provider value={{ selectedText, selectedTitle, setSelectedText, setSelectedTitle }}>
      {children}
    </TextContext.Provider>
  );
}

export function useText() {
  return useContext(TextContext);
}

