export interface UserSchema {
  _id: string;
  username: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginSchema {
  username?: string;
  password?: string;
  isGuest?: boolean;
}

export interface UserRegistrationSchema {
  username: string;
  password: string;
}
