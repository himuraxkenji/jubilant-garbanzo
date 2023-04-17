import { createContext, useContext, useState } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endpoints from '@services/api';

const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signIn = async (email = '', password = '') => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-type': 'application/json',
      },
    };

    try {
      const { data: access_token } = await axios.post(endpoints.auth.login, { email, password }, options);

      if (access_token) {
        Cookie.set('access_token', access_token.access_token, { expires: 5 });
      }
    } catch (error) {
      setError(error);
    }
  };

  return {
    user,
    signIn,
    error,
    setError,
  };
}
