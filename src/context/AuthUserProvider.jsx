import React, {createContext, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ApiContext} from './ApiProvider';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const {api} = useContext(ApiContext);

  const storeUserCache = async (email, password) => {
    try {
      await EncryptedStorage.setItem(
        'user_session',
        JSON.stringify({email, password}),
      );
    } catch (error) {
      console.log('SignIn: erro em storeUserCache', error);
    }
  };

  const getUserCache = async () => {
    try {
      const jsonValue = await EncryptedStorage.getItem('user_session');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.log('AuthUserProvider, retrieveUserSession:', error);
    }
  };

  const signUp = async user => {
    try {
      const response = await api.post('/api/users', user);
      return 'ok';
    } catch (error) {
      console.error('Error signing up:', error);
      return launchServerMessageErro(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      const response = await api.post('/api/login', {email, password});
      await storeUserCache(email, password);
      if (getUser(email, password) === 'ok') {
        return 'ok';
      }
    } catch (error) {
      console.error('Error signing in:', error);
      return launchServerMessageErro(error);
    }
  };

  const forgotPass = async email => {
    try {
      await api.post('/api/forgot-password', {email});
      return 'ok';
    } catch (error) {
      console.error('Error recovering password:', error);
      return launchServerMessageErro(error);
    }
  };

  const getUser = async (email, password) => {
    try {
      const response = await api.get('/api/users', {email});
      if (response.data) {
        response.data.password = password;
        setUser(response.data);
      }
      return 'ok';
    } catch (error) {
      console.error('Error getting user:', error);
      return launchServerMessageErro(error);
    }
  };

  const signOut = async () => {
    try {
      setUser(null);
      await EncryptedStorage.removeItem('user_session');
      return true;
    } catch (error) {
      console.error('Error signing out:', error);
      return false;
    }
  };

  function launchServerMessageErro(e) {
    switch (e.code) {
      case 'auth/invalid-credential':
      case 'auth/invalid-email':
      case 'auth/invalid-password':
        return 'Email ou senha inválidos.';
      case 'auth/user-disabled':
        return 'Usuário desabilitado.';
      case 'auth/user-not-found':
        return 'Usuário não encontrado.';
      case 'auth/email-already-in-use':
        return 'Email já cadastrado.';
      case 'auth/weak-password':
        return 'Digite uma senha mais grande.';
      default:
        return 'Erro desconhecido. Contate o administrador';
    }
  }

  return (
    <AuthUserContext.Provider
      value={{user, setUser, signUp, signIn, forgotPass, getUserCache}}>
      {children}
    </AuthUserContext.Provider>
  );
};
