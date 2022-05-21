import { User } from './user';

export type ILoginVars = {
  username: string;
  password: string;
};

export type ILoginResponse = {
  token: string;
  user: User;
};
