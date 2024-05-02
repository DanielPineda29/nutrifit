import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../src/lib/models/userModel';
import { getUser } from '../../src/lib/Api/features/userSlice';

interface AuthContextType {
  user: User | null;
  login: (strEmail: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Cargar los datos del usuario desde AsyncStorage al iniciar la aplicación
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error al cargar los datos del usuario:', error);
      }
    };
    loadUserData();
  }, []);

  const login = async (strEmail: string) => {
    try {
      const userData = await getUser(strEmail);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      //setUser(prevUser => ({ ...prevUser, ...userData }));
      setUser(userData);
    } catch (error) {
      console.error('Error al guardar los datos del usuario:', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userData');
      setUser(null);
    } catch (error) {
      console.error('Error al eliminar los datos del usuario:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};