import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { AuthApi } from 'apis/authApi';
import { Spin } from 'antd';
import { User } from '../types';
import jwtDecode from 'jwt-decode';
import notification from 'utils/notification';

type UserContextValues = {
  user?: User;
  setUser: (data: User) => void;
  getUser: () => void;
  signOut: () => void;
};

const UserContext = createContext<UserContextValues>(undefined as never);

const useUser = (): UserContextValues => useContext(UserContext);

const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [user, setUser] = useState<User | undefined>(() => {
    const token = localStorage.getItem('token');
    if (!token) return undefined;

    const decode: User = jwtDecode(token.replace('Bearer ', ''));
    return decode;
  });
  const handleRemoveToken = () => {
    localStorage.removeItem('token');
  };
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const getUser = async () => {
    AuthApi.me()
      .then(({ data }) => setUser(data))
      .catch((err: any) => notification('error', err?.response?.message[0]))
      .finally(() => SetIsLoading(false));
  };
  const handleSetUser = (data: User) => {
    setUser(data);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    SetIsLoading(true);
    getUser();
  }, []);

  const signOut = () => {
    handleRemoveToken();
  };

  return (
    <UserContext.Provider value={{ user, getUser, signOut, setUser: handleSetUser }}>
      <Spin size="large" spinning={isLoading}>
        {children}
      </Spin>
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
