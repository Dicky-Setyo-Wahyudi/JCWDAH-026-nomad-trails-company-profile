export interface RegisterForm {
	name: string;
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface RegisterInput {
	name: string;
	email: string;
	username: string;
	password: string;
}

export interface LoginInput {
	login: string;
	password: string;
}