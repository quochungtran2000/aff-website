export type IRole = 'user';

export type User = {
  userId: string;
  username: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  role: IRole;
};
