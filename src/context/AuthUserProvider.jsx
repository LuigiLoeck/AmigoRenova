import React, {createContext, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const [user, setUser] = useState(null);

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

  const signUp = async (user, password) => {};

  const signIn = async (email, password) => {};

  const forgotPass = async email => {};

  const getUser = async password => {};

  const signOut = async () => {};

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
