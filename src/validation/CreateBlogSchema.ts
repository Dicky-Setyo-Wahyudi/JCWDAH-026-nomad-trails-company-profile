import * as Yup from "yup";

export const CreateBlogSchema = Yup.object({

    title: Yup.string().min(5, "Minimum 5 characters").required("Title is required"),
    category: Yup.string().required("Category is required"),
    excerpt: Yup.string().max(250, "Maximum 250 characters").required("Excerpt is required"),
    content: Yup.string().min(30,"Content is too short").required("Content is required"),
    image: Yup.string().required("Image is required"),
    status: Yup.string().oneOf(["Draft", "Published"]).required(),
    featured: Yup.boolean()
});