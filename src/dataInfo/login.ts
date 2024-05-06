import { LoginFormInputNames } from '../components/loginFormInputs';

interface LoginInputInfo {
  label: string;
  type: string;
  name: keyof LoginFormInputNames;
}
const loginInputInfo: LoginInputInfo[] = [
  {
    label: 'Username',
    type: 'text',
    name: 'username',
  },
  {
    label: 'password',
    type: 'text',
    name: 'password',
  },
  {
    label: 'email',
    type: 'email',
    name: 'email',
  },
];
export default loginInputInfo;
