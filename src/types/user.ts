// export type IRole = {
//   description: string;
//   roleId: number;
//   roleName: string;
//   slug: string;
// };

export interface UserInput {
  username: string;
  password: string;
  fullname: string;
  email: string;
  phoneNumber: string;
}
export interface User extends UserInput {
  userId: number;
  role: string;
  imgURL?: string;
}
