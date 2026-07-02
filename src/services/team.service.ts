import axios from "axios";
import type { Team } from "../types/team";

const API_URL = "https://randomuser.me/api/?results=12";

export const getTeams = async (): Promise<Team[]> => {
	const response = await axios.get(API_URL);

	return response.data.results.map((user: any) => ({
		id: user.login.uuid,
		name: `${user.name.first} ${user.name.last}`,
		email: user.email,
		phone: user.phone,
		city: user.location.city,
		country: user.location.country,
		picture: user.picture.large,
		role: "Adventure Guide",
	}));
};