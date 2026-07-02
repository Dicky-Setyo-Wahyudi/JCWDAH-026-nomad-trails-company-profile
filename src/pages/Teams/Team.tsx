import { useEffect, useState } from "react";
import PageTransition from "../../components/common/PageTransition";
import { getTeams } from "../../services/team.service";
import type { Team } from "../../types/team";
import {Search, Star, MapPin, Mail, Phone, ArrowRight} from "lucide-react";

const TeamPage = () => {
	const [teams, setTeams] = useState<Team[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
    const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchTeams = async () => {
			try {
				const data = await getTeams();
				setTeams(data);
			} catch {
				setError("Failed to load team data.");
			} finally {
				setLoading(false);
			}
		};

		fetchTeams();
	}, []);

	if (loading) {
        return (
            <PageTransition>
                <section className="min-h-screen flex items-center justify-center">
                    <h2 className="text-2xl font-semibold text-[#0F4C75]">
                        Loading team...
                    </h2>
                </section>
            </PageTransition>
        );
    }

    if (error) {
        return (
            <PageTransition>
                <section className="min-h-screen flex items-center justify-center">
                    <h2 className="text-red-500 font-semibold">
                        {error}
                    </h2>
                </section>
            </PageTransition>
        );
    }

    const filteredTeams = teams.filter((team) =>
        team.name.toLowerCase().includes(search.toLowerCase())
    );

	return (
		<PageTransition>
			<section className="min-h-screen py-24 bg-[#F9F7F7]">
                <div className="max-w-7xl mx-auto px-6">
                    <p className="uppercase tracking-[4px] text-[#3282B8] font-semibold text-center">
                        Our Professional Team
                    </p>

                    <h1 className="text-5xl font-bold text-center text-[#0F4C75] mt-4">
                        Meet Our Adventure Guides
                    </h1>

                    <p className="text-center text-gray-500 mt-6 max-w-2xl mx-auto">
                        Meet our experienced guides who are ready to accompany
                        every unforgettable adventure.
                    </p>

                    <div className="mt-12 max-w-xl mx-auto relative">
                        <Search size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"/>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search guide..." className="w-full pl-14 pr-5 py-4 rounded-2xl border border-gray-300 bg-white focus:ring-2 focus:ring-[#3282B8] focus:outline-none"/>
                    </div>

                    {filteredTeams.length === 0 && (
                        <div className="text-center py-20">
                            <h3 className="text-2xl font-semibold text-gray-500">
                                No team member found.
                            </h3>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-16">
                        {
                            filteredTeams.map((team) => (
                                <div key={team.id} data-aos="zoom-in" className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8">
                                    <div className="flex justify-center">
                                        <img src={team.picture} alt={team.name} loading="lazy" className="w-28 h-28 rounded-full object-cover border-4 border-[#BBE1FA] group-hover:scale-110 transition-transform duration-300"/>
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-center text-[#0F4C75]">
                                        {team.name}
                                    </h3>

                                    <p className="text-center text-[#3282B8] font-medium mt-1">
                                        {team.role}
                                    </p>

                                    <div className="flex justify-center gap-1 mt-4">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star key={index} size={16} fill="#FACC15" strokeWidth={0}/>
                                        ))}
                                    </div>

                                    <div className="space-y-3 mt-6 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MapPin size={18} className="text-[#3282B8]" />
                                            <span>
                                                {team.city}, {team.country}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Mail size={18} className="text-[#3282B8]" />
                                            <span className="truncate">
                                                {team.email}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Phone size={18} className="text-[#3282B8]" />
                                            <span>
                                                {team.phone}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
		</PageTransition>
	);
};

export default TeamPage;