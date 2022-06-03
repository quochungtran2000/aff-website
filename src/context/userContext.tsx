import { ReactNode, createContext, useContext, useEffect, useState, useCallback } from 'react';

import { AuthApi } from 'apis/authApi';
import { Spin } from 'antd';
import { ProductTemplateResponse, User } from '../types';
import jwtDecode from 'jwt-decode';
import notification from 'utils/notification';
import { Category } from 'types/category';
import { CategoryApi } from 'apis/categoryApi';
import postApi from 'apis/postApi';
import { Post } from 'types/post';
import { ProductApi } from 'apis/productApi';

type UserContextValues = {
  user?: User;
  category: Category[];
  posts: Post[];
  savePosts: Post[];
  saveProducts: ProductTemplateResponse[];
  setUser: (data: User) => void;
  getUser: () => void;
  signOut: () => void;
  refetchSavePost: () => void;
  refetchSaveProduct: () => void;
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
  const [posts, setPosts] = useState<Post[]>([]);
  const [savePosts, setSavePosts] = useState<Post[]>([]);
  const [saveProducts, setSaveProducts] = useState<ProductTemplateResponse[]>([]);

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

  const getPosts = useCallback(() => {
    postApi
      .getPosts({ page: 1, pageSize: 4 })
      .then(({ data: { data } }) => setPosts(data))
      .catch((error) => console.log({ error }));
  }, []);

  const getSavePost = useCallback(() => {
    postApi
      .mySavePost()
      .then(({ data: { data } }) => setSavePosts(data))
      .catch((error) => console.log({ error }));
  }, []);

  const getSaveProduct = useCallback(() => {
    ProductApi.getMySaveProduct()
      .then(({ data: { data } }) => setSaveProducts(data))
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

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  useEffect(() => {
    getSaveProduct();
  }, [getSaveProduct]);

  useEffect(() => {
    getSavePost();
  }, [getSavePost]);
  const signOut = () => {
    localStorage.removeItem('token');
    setUser(undefined);
    notification('success', 'Đăng xuất thành công');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        category,
        getUser,
        signOut,
        setUser: handleSetUser,
        posts,
        savePosts,
        saveProducts,
        refetchSavePost: getSavePost,
        refetchSaveProduct: getSaveProduct,
      }}
    >
      <Spin size="large" spinning={isLoading}>
        {children}
      </Spin>
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
