import { createContext, useContext } from 'react';

export const VariantContext = createContext('A');
export const useVariant = () => useContext(VariantContext);
