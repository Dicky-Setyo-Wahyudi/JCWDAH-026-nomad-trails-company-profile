interface Props {
    title: string;
    value: number;

}

const StatsCard = ({ title, value }: Props) => {
    return (
        <div className="bg-white rounded-3xl shadow-lg p-6">
            <p className="text-gray-500">
                {title}
            </p>
            <h2 className="text-4xl font-bold text-[#0F4C75] mt-3">
                {value}
            </h2>
        </div>
    );
};

export default StatsCard;