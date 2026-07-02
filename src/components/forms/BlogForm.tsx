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
        <Formik
            initialValues={initialValues}
            validationSchema={CreateBlogSchema}
            onSubmit={async (values, { setSubmitting }) => {
                await onSubmit(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting, setFieldValue, values }) => (
                <Form className="space-y-6 bg-white rounded-3xl shadow-xl p-10">
                    <h2 className="text-3xl font-bold text-[#0F4C75]">
                        Create Blog
                    </h2>

                    <div>
                        <label className="font-semibold"> Title </label>
                        <Field name="title" className="mt-2 w-full border rounded-xl p-3"/>
                        <ErrorMessage name="title" component="p" className="text-red-500 text-sm"/>
                    </div>

                    <div>
                        <label className="font-semibold"> Category </label>
                        <Field as="select" name="category" className="mt-2 w-full border rounded-xl p-3">
                            <option value="">
                                Choose Category
                            </option>
                            <option value="Mountain">
                                Mountain
                            </option>
                            <option value="Beach">
                                Beach
                            </option>
                            <option value="Forest">
                                Forest
                            </option>
                            <option value="Camping">
                                Camping
                            </option>
                        </Field>

                        <ErrorMessage name="category" component="p" className="text-red-500 text-sm"/>
                    </div>

                    <div>
                        <label className="font-semibold block mb-2"> Cover Image </label>

                        <input type="file" accept="image/*"
                            onChange={async (e) => {
                                const file = e.target.files?.[0];

                                if (!file) return;

                                const url = await uploadImage(file);

                                setFieldValue("image", url);
                            }}
                        />

                        {values.image && (
                            <img
                                src={values.image}
                                alt=""
                                className="mt-4 rounded-xl h-56 w-full object-cover"
                            />
                        )}
                    </div>

                    <div>
                        <label className="font-semibold"> Excerpt </label>
                        <Field as="textarea" rows={3} name="excerpt" className="mt-2 w-full border rounded-xl p-3"/>
                    </div>

                    <div>
                        <label className="font-semibold"> Content </label>
                        <Field as="textarea" rows={10} name="content" className="mt-2 w-full border rounded-xl p-3"/>
                    </div>

                    <div>
                        <label className="font-semibold block mb-2"> Status </label>
                        <label className="mr-5">
                            <Field type="radio" name="status" value="Published"/>
                            Published
                        </label>

                        <label className="mr-5">
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

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#0F4C75] text-white py-3 rounded-xl hover:bg-[#3282B8]">
                        {isSubmitting ? (
                            <div className="flex justify-center items-center gap-2">
                                <Loader2
                                    className="animate-spin"
                                    size={18}
                                />
                                Saving...
                            </div>
                        ) : (
                            "Save Blog"
                        )}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default BlogForm;