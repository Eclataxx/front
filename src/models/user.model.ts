export default interface UserModel {
  '@id': string;
  '@type': string;
  username: string;
  email: string;
  roles: string[];
  password: string;
};
