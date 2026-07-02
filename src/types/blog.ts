export interface Blog {
    objectId?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    status: "Draft" | "Published";
    readTime: string;
    featured: boolean;
    views: number;
    created?: number;
    updated?: number;

}