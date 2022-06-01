import { ReactNode, createContext, useContext, useEffect, useState, useCallback } from 'react';

import { AuthApi } from 'apis/authApi';
import { Spin } from 'antd';
import { User } from '../types';
import jwtDecode from 'jwt-decode';
import notification from 'utils/notification';
import { Category } from 'types/category';
import { CategoryApi } from 'apis/categoryApi';

type UserContextValues = {
  user?: User;
  category: Category[];
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

    const decode: User = jwtDecode(token);
    return decode;
  });
  const [category, setCategory] = useState<Category[]>([]);
  const [isLoading, SetIsLoading] = useState<boolean>(false);

  const getUser = useCallback(() => {
    AuthApi.me()
      .then(({ data }) => setUser(data))
      .catch((err: any) => notification('error', err?.response?.message[0]))
      .finally(() => SetIsLoading(false));
  }, []);

  const getCategory = useCallback(() => {
    CategoryApi.getCategory()
      .then(({ data }) => setCategory(data))
      .catch((error) => console.log({ error }));
  }, []);

  const handleSetUser = (data: User) => {
    setUser(data);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    SetIsLoading(true);
    getUser();
  }, [getUser]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(undefined);
    notification('success', 'Đăng xuất thành công');
  };

  return (
    <UserContext.Provider value={{ user, category, getUser, signOut, setUser: handleSetUser }}>
      <Spin size="large" spinning={isLoading}>
        {children}
      </Spin>
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
