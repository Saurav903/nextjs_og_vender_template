'use client'
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [baground,setBaground]=useState('')
    const [category,setCategory]=useState('')

  return (
    <AuthContext.Provider value={{baground,setBaground,category,setCategory }}>
      {children}
    </AuthContext.Provider>
  );
}
