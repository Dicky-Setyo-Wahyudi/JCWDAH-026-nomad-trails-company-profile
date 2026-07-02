import { useEffect, useState } from "react";
import PageTransition from "../../components/common/PageTransition";
import { getBlogs, deleteBlog } from "../../services/blog.service";
import type { Blog } from "../../types/blog";
import StatsCard from "../../components/dashboard/StatsCard";
import BlogTable from "../../components/dashboard/BlogTable";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { toast } from "react-toastify";

const Dashboard = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadBlogs = async () => {
            const data = await getBlogs();
            setBlogs(data);
            setLoading(false);
        };
        loadBlogs();
    }, []);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this blog?"
        );
        if (!confirmDelete) return;
        try {
            await deleteBlog(id);
            setBlogs((prev) =>
                prev.filter((blog) => blog.objectId !== id)
            );
            toast.success("Blog deleted successfully.");
        } catch {
            toast.error("Failed to delete blog.");
        }
    };

    if (loading) {
        return (
            <PageTransition>
                <div className="min-h-screen flex justify-center items-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-10 w-10 rounded-full border-4 border-[#3282B8] border-t-transparent animate-spin"/>
                        <p className="font-semibold text-[#0F4C75]">
                            Loading Dashboard...
                        </p>
                    </div>
                </div>
            </PageTransition>
        );

    }

    return (
        <PageTransition>
            <section className="bg-[#F9F7F7] min-h-screen py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-5xl font-bold text-[#0F4C75]"> Dashboard </h1>
                    <p className="text-gray-500 mt-3"> Blog Management </p>
                    <div className="flex justify-end mt-8">
                        <Link to="/create-blog" className="inline-flex items-center gap-2 bg-[#0F4C75] hover:bg-[#3282B8] text-white px-6 py-3 rounded-xl transition">
                            <Plus size={20}/> Add Blog
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-4 gap-6 mt-10">
                        <StatsCard title="Total Blogs" value={blogs.length}/>
                        <StatsCard title="Published" value={blogs.filter(x => x.status === "Published").length}/>
                        <StatsCard title="Draft" value={blogs.filter(x => x.status === "Draft").length}/>
                        <StatsCard title="Featured" value={blogs.filter(x => x.featured).length}/>
                    </div>
                    <div className="mt-12">
                        <BlogTable blogs={blogs} onDelete={handleDelete}/>
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default Dashboard;