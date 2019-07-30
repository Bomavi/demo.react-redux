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
