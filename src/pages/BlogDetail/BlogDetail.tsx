import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CalendarDays, Clock3, FolderOpen, ArrowLeft} from "lucide-react";
import PageTransition from "../../components/common/PageTransition";
import { getBlogBySlug } from "../../services/blog.service";
import type { Blog } from "../../types/blog";

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) return;
            const result = await getBlogBySlug(slug);
            setBlog(result);
            setLoading(false);
        };
        fetchBlog();
    }, [slug]);

    if (loading) {
        return (
            <PageTransition>
                <section className="min-h-screen flex justify-center items-center">
                    Loading...
                </section>
            </PageTransition>
        );
    }

    if (!blog) {
        return (
            <PageTransition>
                <section className="min-h-screen flex justify-center items-center">
                    Blog not found.
                </section>
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <section className="py-24 bg-[#F9F7F7]">
                <div className="max-w-4xl mx-auto px-6">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-[#3282B8] hover:text-[#0F4C75] mb-10">
                        <ArrowLeft size={18} /> Back to Blog
                    </Link>

                    <img src={blog.image} alt={blog.title} className="rounded-3xl w-full h-[500px] object-cover"/>
                        <h1 className="text-5xl font-bold text-[#0F4C75] mt-10"> {blog.title} </h1>

                    <div className="flex flex-wrap gap-6 mt-6 text-gray-500">
                        <div className="flex items-center gap-2">
                            <FolderOpen size={18} /> {blog.category}
                        </div>

                        <div className="flex items-center gap-2">
                            <Clock3 size={18} /> {blog.readTime}
                        </div>

                        <div className="flex items-center gap-2">
                            <CalendarDays size={18} />
                            {new Date(blog.created ?? "").toLocaleDateString(
                                "en-US",
                                {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                }
                            )}
                        </div>
                    </div>

                    <p className="text-lg italic text-gray-500 mt-8"> {blog.excerpt} </p>

                    <div className="mt-10 leading-8 whitespace-pre-line text-gray-700">
                        {blog.content}
                    </div>
                </div>
            </section>
        </PageTransition>
    );
};

export default BlogDetail;