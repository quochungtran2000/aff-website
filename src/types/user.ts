export type IRole = 'user';

export interface UserInput {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phoneNumber: string;
}
export interface User extends UserInput {
  userId: string;
  role: IRole;
  imgURL?: string;
}
