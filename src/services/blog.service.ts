import Backendless from "../lib/backendless";
import type { Blog } from "../types/blog";

const TABLE = "Blogs";

export const getBlogs = async (): Promise<Blog[]> => {
    return await Backendless.Data.of(TABLE).find() as Blog[];
};

export const getBlogById = async (id: string): Promise<Blog | null> => {
    return await Backendless.Data.of(TABLE).findById(id) as Blog;
};

export const getBlogBySlug = async (slug: string): Promise<Blog | null> => {
    const query = `slug = '${slug}'`;

    const result = await Backendless.Data
        .of(TABLE)
        .find({
            where: query,
            pageSize: 1,
        });

    return (result[0] as Blog) ?? null;
};

export const createBlog = async (blog: Blog): Promise<Blog> => {
    return await Backendless.Data.of(TABLE).save(blog) as Blog;
};

export const updateBlog = async (blog: Blog): Promise<Blog> => {
    return await Backendless.Data.of(TABLE).save(blog) as Blog;
};

export const deleteBlog = async (id: string): Promise<void> => {
    await Backendless.Data.of(TABLE).remove(id);
};