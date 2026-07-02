import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageTransition from "../../components/common/PageTransition";
import { getBlogs } from "../../services/blog.service";
import type { Blog } from "../../types/blog";
import { ArrowRight, ChevronLeft, ChevronRight, CalendarDays, Clock3, FolderOpen, Loader2 } from "lucide-react";

const BLOGS_PER_PAGE = 6;

const BlogPage = () => {
    const [blogs,setBlogs] = useState<Blog[]>([]);
    const [loading,setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const fetchBlogs = async () => {
            const result = await getBlogs();
            setBlogs(result);
            setLoading(false);
        }

        fetchBlogs();
    },[]);

    if(loading){
        return(
            <PageTransition>
                <section className="min-h-screen flex flex-col justify-center items-center gap-4">
                    <Loader2 size={42} className="animate-spin text-[#3282B8]"/>
                    <p className="font-semibold text-[#0F4C75]"> Loading Blogs... </p>
                </section>
            </PageTransition>
        )
    }

    const sortedBlogs = [...blogs]
    .filter((blog) => blog.status === "Published")
    .sort((a, b) => {
        if (a.featured !== b.featured) {
            return Number(b.featured) - Number(a.featured);
        }
        return (
            new Date(b.created ?? "").getTime() -
            new Date(a.created ?? "").getTime()
        );
    });

    const filteredBlogs = sortedBlogs.filter((blog) => {
        const keyword = search.toLowerCase();
        const matchSearch =
            (blog.title ?? "").toLowerCase().includes(keyword) ||
            (blog.excerpt ?? "").toLowerCase().includes(keyword) ||
            (blog.author ?? "").toLowerCase().includes(keyword) ||
            (blog.category ?? "").toLowerCase().includes(keyword);
        const matchCategory = category === "All" || blog.category === category;
        return (matchSearch && matchCategory);
    });

    const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
    const indexOfLastBlog = currentPage * BLOGS_PER_PAGE;
    const indexOfFirstBlog = indexOfLastBlog - BLOGS_PER_PAGE;
    const currentBlogs = filteredBlogs.slice(
        indexOfFirstBlog,
        indexOfLastBlog
    );

        return(
            <PageTransition>
                <section className="py-24 bg-[#F9F7F7] min-h-screen">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-10">
                            <div>
                                <h1 className="text-5xl font-bold text-[#0F4C75]"> Travel Blog </h1>
                                <p className="text-gray-500 mt-3"> Explore our latest stories. </p>
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <input type="search" placeholder="Search blog..." value={search} onChange={(e) => {setSearch(e.target.value); setCurrentPage(1);}} className="w-full lg:w-96 border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
                                <select value={category} onChange={(e) => {setCategory(e.target.value); setCurrentPage(1);}} className="border border-gray-300 rounded-xl px-5 py-3">
                                    <option value="All">All Categories</option>
                                    <option value="Mountain">Mountain</option>
                                    <option value="Beach">Beach</option>
                                    <option value="Camping">Camping</option>
                                    <option value="Forest">Forest</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                 filteredBlogs.length === 0 ? (
                                    <div className="col-span-full text-center py-24">
                                        <h2 className="text-3xl font-bold text-[#0F4C75]">
                                            {
                                                search || category !== "All"
                                                    ? "No Matching Blogs"
                                                    : "No Blogs Yet"
                                            }
                                        </h2>
                                        <p className="text-gray-500 mt-3">
                                            {
                                                search || category !== "All"
                                                    ? "Try another keyword or category."
                                                    : "There are no blogs available."
                                            }
                                        </p>
                                    </div>
                                ) : (
                                currentBlogs.map(blog=>(
                                    <div key={blog.objectId} className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 ease-out">
                                        <img src={blog.image || "/images/no-image.jpg"} alt={blog.title} className="h-56 w-full object-cover"/>
                                        <div className="p-6">
                                            <h2 className="text-2xl font-bold text-[#0F4C75]"> {blog.title} </h2>
                                            <p className="text-gray-500 mt-3 line-clamp-3"> {blog.excerpt} </p>

                                            <div className="mt-5 space-y-2 text-sm text-gray-500">
                                                <div className="flex items-center gap-2">
                                                    <FolderOpen size={16}/> {blog.category}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <Clock3 size={16}/> {blog.readTime}
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <CalendarDays size={16}/> 
                                                    {
                                                        new Date(blog.created ?? "").toLocaleDateString("en-US", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                        })
                                                    }
                                                </div>

                                                <div className="flex items-center justify-between pt-3 border-t mt-4">
                                                    <span className="text-sm text-gray-500"> By {blog.author || "Unknown"} </span>
                                                        {
                                                            blog.featured && (
                                                                <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
                                                                    Featured
                                                                </span>
                                                            )
                                                        }
                                                </div>
                                            </div>

                                            <Link to={`/blog/${blog.slug}`} aria-label={`Read ${blog.title}`} className="mt-6 inline-flex items-center gap-2 font-semibold text-[#3282B8] hover:text-[#0F4C75] transition group"> 
                                                Read More <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                            </Link>                  
                                        </div>
                                    </div>
                                    ))
                                )
                            }
                        </div>

                        {
                            totalPages > 1 && (
                                <div className="flex justify-center items-center gap-3 mt-12">
                                    <button disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)} className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed">
                                        <ChevronLeft size={18}/>
                                    </button>

                                    {
                                        Array.from({ length: totalPages }).map((_, index) => (
                                            <button key={`page-${index}`} onClick={() => setCurrentPage(index + 1)} className={`h-10 w-10 rounded-xl transition ${
                                                    currentPage === index + 1
                                                        ? "bg-[#0F4C75] text-white"
                                                        : "border border-gray-300 hover:bg-gray-100"
                                                }`}
                                            >
                                                {index + 1}
                                            </button>
                                        ))
                                    }

                                    <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((prev) => prev + 1)} className="px-4 py-2 rounded-xl border border-gray-300 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed">
                                        <ChevronRight size={18}/>
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </section>
            </PageTransition>
        )
}

export default BlogPage;