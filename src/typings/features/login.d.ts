declare interface LoginType {
	username?: string;
	password?: string;
	isGuest?: boolean;
}

declare interface RegisterType {
	username: string;
	password: string;
}

declare interface UserType {
	_id: string;
	username: string;
	theme: MUIThemeType;
	createdAt: string;
	updatedAt: string;
}

declare interface UserUpdateSchema {
	username?: string;
	theme?: MUIThemeType;
}

declare type AuthenticateResponseType = UserType | null;
declare type LoginResponseType = UserType | null;
declare type RegisterResponseType = UserType | null;
declare type UserUpdateResponse = UserType | null;
