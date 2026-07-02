import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import BlogForm from "../../components/forms/BlogForm";
import PageTransition from "../../components/common/PageTransition";
import { getBlogById, updateBlog} from "../../services/blog.service";
import { generateSlug } from "../../utils/slug";
import { calculateReadTime } from "../../utils/readtime";
import { useAuth } from "../../hooks/useAuth";
import type { Blog } from "../../types/blog";

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const loadBlog = async () => {
            try {
                if (!id) return;
                const data = await getBlogById(id);
                if (data) {
                    setBlog(data);
                }
            } catch {
                toast.error("Failed to load blog.");
            } finally {
                setLoading(false);
            }
        };

        loadBlog();
    }, [id]);

    if (loading) {
        return (
            <PageTransition>
                <section className="min-h-screen flex justify-center items-center"> Loading... </section>
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

    const handleSubmit = async (values: Blog) => {
        try {
            values.objectId = blog.objectId!;
            values.slug = generateSlug(values.title);
            values.author = user?.name ?? "Anonymous";
            values.readTime = calculateReadTime(values.content);
            await updateBlog(values);
            toast.success("Blog Updated");
            navigate("/blog");
        } catch {
            toast.error("Update Failed");
        }
    };

    return (
        <PageTransition>
            <section className="py-20 bg-[#F9F7F7]">
                <div className="max-w-5xl mx-auto px-6">
                    <BlogForm initialValues={blog} onSubmit={handleSubmit}/>
                </div>
            </section>
        </PageTransition>
    );
};

export default EditBlog;