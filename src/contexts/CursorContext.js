import { createContext, useContext } from 'react';

export const CursorContext = createContext();
export const useCursorContext = () => useContext(CursorContext);