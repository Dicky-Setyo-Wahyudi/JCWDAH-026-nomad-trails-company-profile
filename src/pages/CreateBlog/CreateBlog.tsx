import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BlogForm from "../../components/forms/BlogForm";
import PageTransition from "../../components/common/PageTransition";
import { createBlog } from "../../services/blog.service";

const CreateBlog = () => {
    const navigate = useNavigate();
    const initialValues = {
        title: "",
        category: "",
        image: "",
        excerpt: "",
        content: "",
        status: "Published",
        featured: false,
        slug: "",
        author: "",
        readTime: "5 min",
        views: 0
    };

    const handleSubmit = async (values: any) => {
    try {
        values.slug = values.title.toLowerCase().replace(/\s+/g, "-");
        values.author = "Admin";
        values.readTime = Math.ceil(values.content.split(" ").length / 200) + " min read";
        values.views = 0;
        console.log("Sending data:", values);
        await createBlog(values);
        toast.success("Blog created successfully!");
        navigate("/blog");
    } catch (error: any) {
        console.error("Create Error:", error);
        toast.error(
            error?.message ??
            JSON.stringify(error)
        );
    }
};

    return (
        <PageTransition>
            <section className="min-h-screen bg-[#F9F7F7] py-20">
                <div className="max-w-5xl mx-auto px-6">
                    <BlogForm initialValues={initialValues} onSubmit={handleSubmit}/>
                </div>
            </section>
        </PageTransition>
    );
};

export default CreateBlog;