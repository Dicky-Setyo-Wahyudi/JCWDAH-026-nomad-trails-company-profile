import {createContext, useEffect, useState, type ReactNode,} from "react";
import Backendless from "../lib/backendless";
import { loginUser, logoutUser } from "../services/auth.service";

interface AuthContextType {
	user: any;
	loading: boolean;
	login: (login: string, password: string) => Promise<void>;
	logout: () => Promise<void>;
	refreshUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
	children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const refreshUser = async () => {
		try {
			const currentUser =
				await Backendless.UserService.getCurrentUser();
			setUser(currentUser);
		} catch {
			setUser(null);
		}
	};

	useEffect(() => {
		const loadUser = async () => {
			await refreshUser();
			setLoading(false);
		};

		loadUser();
	}, []);

	const login = async (
		loginValue: string,
		password: string
	) => {
		await loginUser({
			login: loginValue,
			password,
		});

		await refreshUser();
	};

	const logout = async () => {
		await logoutUser();
		setUser(null);
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				login,
				logout,
				refreshUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};