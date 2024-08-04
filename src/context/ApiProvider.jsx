import React, {createContext, useEffect, useState} from 'react';
import {create} from 'apisauce';

export const ApiContext = createContext({});

export const ApiProvider = ({children}) => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const api = create({
      baseURL: 'https://api.github.com',
    });

    setApi(api);
  }, []);

  return (
    <ApiContext.Provider
      value={{
        api,
      }}>
      {children}
    </ApiContext.Provider>
  );
};
