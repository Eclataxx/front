export default interface UserModel {
  '@id': string;
  '@type': string;
  id: number;
  username: string;
  email: string;
  roles: string[];
  password: string;
};
