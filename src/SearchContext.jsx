import React, { createContext, useContext, useReducer } from 'react';

// Define el reducer
const searchReducer = (state, action) => {
  switch (action.type) {
    case 'select':
      // Lógica para manejar la acción 'select' y actualizar el estado
      return { ...state, selectedData: action.payload };
    // Otros casos y lógica según tus necesidades
    default:
      return state;
  }
};

// Crea el contexto
const SearchContext = createContext();

// Proveedor del contexto
function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, {
    selectedData: null,
  });

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
}

// Función personalizada para usar el contexto
function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch debe usarse dentro de un SearchProvider');
  }
  return context;
}

export { SearchProvider, useSearch };
