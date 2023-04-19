export interface IFromvalues {
  email: string;
  password: string;
}

export interface ILoginForm extends IFromvalues {}

export interface IRegisterForm extends IFromvalues {
  name: string;
  avatar: string;
}

export interface InputInterface {
  value: string;
  setValue: (val: string) => void;
  isActive: string;
  setIsActive: (str: string) => void;
}
