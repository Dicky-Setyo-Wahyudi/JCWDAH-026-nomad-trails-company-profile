import Backendless from "../lib/backendless";
import type { LoginInput, RegisterInput } from "../types/user";

export const checkUsername = async (username: string) => {
	const whereClause = `username='${username}'`;
	const users = await Backendless.Data.of("Users").find({
		where: whereClause,
	});
	return users.length > 0;
};

export const registerUser = async (data: RegisterInput) => {
	const user = {
		username: data.username,
		name: data.name,
		email: data.email,
		password: data.password,
	};

	return await Backendless.UserService.register(user);
};

export const loginUser = async (data: LoginInput) => {
	return await Backendless.UserService.login(
		data.login,
		data.password,
		true
	);
};

export const logoutUser = async () => {
	return await Backendless.UserService.logout();
};

export const getCurrentUser = async () => {
	return await Backendless.UserService.getCurrentUser();
};