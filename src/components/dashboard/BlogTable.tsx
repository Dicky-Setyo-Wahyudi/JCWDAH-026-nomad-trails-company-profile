import { Link } from "react-router-dom";
import type { Blog } from "../../types/blog";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
    blogs: Blog[];
    onDelete: (id: string) => void;
}

const BlogTable = ({blogs, onDelete}: Props) => {
    return (
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <table className="w-full">
                <thead className="bg-[#0F4C75] text-white">
                    <tr>
                        <th className="p-4">No</th>
                        <th className="p-4">Image</th>
                        <th className="p-4 text-left">Title</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Author</th>
                        <th className="p-4">Status</th>
                        <th className="p-4">Featured</th>
                        <th className="p-4">Created</th>
                        <th className="p-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                         blogs.length === 0 ?
                            (
                                <tr>
                                    <td colSpan={5} className="text-center py-10 text-gray-500"> No blogs available. </td>
                                </tr>
                            ) :
                       blogs.map((blog, index) => (
                            <tr key={blog.objectId} className="border-b hover:bg-gray-50 transition">
                                <td className="p-4 text-center"> {index + 1} </td>
                                <td className="p-4">
                                    <img src={blog.image || "/images/no-image.jpg"} alt={blog.title} className="w-20 h-14 rounded-lg object-cover"/>
                                </td>
                                <td className="p-4"> {blog.title} </td>
                                <td className="p-4 text-center"> {blog.category} </td>
                                <td className="p-4 text-center"> {blog.author} </td>
                                <td className="p-4 text-center">
                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                            blog.status === "Published"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                        }`}
                                    >
                                        {blog.status}
                                    </span>
                                </td>
                                <td className="p-4 text-center">
                                    {blog.featured ? (
                                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                                            Yes
                                        </span>
                                    ) : (
                                        <span className="text-gray-400">
                                            No
                                        </span>
                                    )}
                                </td>
                                <td className="p-4 text-center">
                                    {blog.created
                                        ? new Date(blog.created).toLocaleDateString(
                                              "en-US",
                                              {
                                                  day: "numeric",
                                                  month: "short",
                                                  year: "numeric",
                                              }
                                          )
                                        : "-"}
                                </td>
                                <td className="p-4">
                                    <div className="flex justify-center gap-2">
                                        <Link to={`/edit-blog/${blog.objectId}`} className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
                                            <Pencil size={18}/> Edit
                                        </Link>

                                        <button onClick={() => onDelete(blog.objectId!)} className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                                            <Trash2 size={18}/> Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BlogTable;