export const calculateReadTime = (content: string): string => {
    const words = content.trim().split(/\s+/).length;
    const minute = Math.max(1, Math.ceil(words / 200));
    return `${minute} min read`;
};