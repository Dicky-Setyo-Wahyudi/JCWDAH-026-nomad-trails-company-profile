import { Formik, Form, Field, ErrorMessage } from "formik";
import { Loader2 } from "lucide-react";
import { CreateBlogSchema } from "../../validation/CreateBlogSchema";
import { uploadImage } from "../../services/upload.service";

interface Props {
    initialValues: any;
    onSubmit: (values: any) => Promise<void>;
}

const BlogForm = ({ initialValues, onSubmit }: Props) => {
    return (
        <Formik initialValues={initialValues} validationSchema={CreateBlogSchema} onSubmit={async (values, { setSubmitting }) => {
                try {
                    await onSubmit(values);
                } finally {
                    setSubmitting(false);
                }
            }}
        >
            {({isSubmitting, setFieldValue, values, errors}) => {
                console.log("Formik Errors:", errors);

                return (
                    <Form className="space-y-6 bg-white rounded-3xl shadow-xl p-10">
                        <h2 className="text-3xl font-bold text-[#0F4C75]"> Create Blog </h2>
                        <div>
                            <label className="font-semibold"> Title </label>
                            <Field name="title" className="mt-2 w-full border rounded-xl p-3"/>
                            <ErrorMessage name="title" component="p" className="text-red-500 text-sm"/>
                        </div>

                        <div>
                            <label className="font-semibold"> Category </label>
                            <Field as="select" name="category" className="mt-2 w-full border rounded-xl p-3">
                                <option value=""> Choose Category </option>
                                <option value="Mountain"> Mountain </option>
                                <option value="Beach"> Beach </option>
                                <option value="Forest"> Forest </option>
                                <option value="Camping"> Camping </option>
                            </Field>

                            <ErrorMessage name="category" component="p" className="text-red-500 text-sm"/>
                        </div>

                        <div>
                            <label className="font-semibold block mb-2"> Cover Image </label>
                            <input type="file" accept="image/*"
                                onChange={async (e) => {
                                    const file = e.target.files?.[0];
                                    if (!file) return;
                                    try {
                                        const url = await uploadImage(file);
                                        console.log("Uploaded Image:", url);
                                        setFieldValue("image", url);
                                    } catch (err) {
                                        console.error(err);
                                    }
                                }}
                            />
                            <ErrorMessage name="image" component="p" className="text-red-500 text-sm"/>
                            {values.image && (
                                <img src={values.image} alt="Preview" className="mt-4 h-56 w-full rounded-xl object-cover"/>
                            )}
                        </div>

                        <div>
                            <label className="font-semibold"> Excerpt </label>
                            <Field as="textarea" rows={3} name="excerpt" className="mt-2 w-full border rounded-xl p-3"/>
                            <ErrorMessage name="excerpt" component="p" className="text-red-500 text-sm"/>
                        </div>

                        <div>
                            <label className="font-semibold"> Content </label>
                            <Field as="textarea" rows={10} name="content" className="mt-2 w-full border rounded-xl p-3"/>

                            <ErrorMessage name="content" component="p" className="text-red-500 text-sm"/>
                        </div>

                        <div>
                            <label className="font-semibold block mb-2"> Status </label>
                            
                            <label className="mr-5">
                                <Field type="radio" name="status" value="Published"/>
                                Published
                            </label>

                            <label>
                                <Field type="radio" name="status" value="Draft"/>
                                Draft
                            </label>
                        </div>

                        <div>
                            <label className="flex items-center gap-3">
                                <Field type="checkbox" name="featured"/>
                                Featured Blog
                            </label>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="w-full bg-[#0F4C75] hover:bg-[#3282B8] text-white py-3 rounded-xl disabled:opacity-50">
                            {isSubmitting ? (
                                <div className="flex justify-center items-center gap-2">
                                    <Loader2 size={18} className="animate-spin"/>
                                    Saving...
                                </div>
                            ) : (
                                "Save Blog"
                            )}
                        </button>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default BlogForm;