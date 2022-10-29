export interface LoginInterface extends LoginInterfaceBase {
  id: string;
}

export interface LoginInterfaceBase {
  email: string;
  password: string;
}
