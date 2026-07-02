import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PageTransition from "../../components/common/PageTransition";
import { checkUsername,registerUser } from "../../services/auth.service";
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useState } from "react";

const RegisterSchema = Yup.object({
	name: Yup.string().min(3, "Minimum 3 characters").required("Name is required"),
    username: Yup.string().min(4, "Minimum 4 characters").max(20,"Maximum 20 characters").matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscore").required("Username is required"),
	email: Yup.string().email("Invalid email").required("Email is required"),
	password: Yup.string().min(8, "Minimum 8 characters").required("Password is required"),
	confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password does not match").required("Confirm password is required"),
});

const Register = () => {
	const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	return (
		<PageTransition>
			<section className="min-h-screen bg-[#F9F7F7] flex justify-center items-center px-6">
				<div data-aos="zoom-in-up" className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
					<h1 className="text-4xl font-bold text-[#0F4C75] text-center"> Create Account </h1>
					<p className="text-center text-gray-500 mt-4"> Join Nomad Trails Adventure </p>
					<Formik
						initialValues={{
							name: "",
							email: "",
                            username: "",
							password: "",
							confirmPassword: "",
						}}

						validationSchema={RegisterSchema}
						onSubmit={async (values, { setSubmitting }) => {
							try {
                                const usernameExists = await checkUsername(values.username);
                                if (usernameExists) {
                                    toast.error("Username already exists.");
                                    setSubmitting(false);
                                    return;
                                }

								await registerUser({
									name: values.name,
                                    username: values.username,
									email: values.email,
									password: values.password,
								});
								toast.success("Account created successfully!");
								navigate("/login");
							} catch (error: any) {
                                const message = error?.message ?? "";
                                if (
                                    message.toLowerCase().includes("exists") ||
                                    message.toLowerCase().includes("email")
                                ) {
                                    toast.error("Email already registered.");
                                } else {
                                    toast.error(message || "Unable to create account.");
                                }
							} finally {
								setSubmitting(false);
							}
						}}
					>

						{({ isSubmitting }) => (
							<Form className="space-y-5 mt-8">
								<div>
									<Field name="name" placeholder="Full Name" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
									<ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1"/>
								</div>

                                <div>
                                    <Field name="username" placeholder="Username" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
                                    <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1"/>
                                </div>

								<div>
									<Field name="email" type="email" placeholder="Email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
									<ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1"/>
								</div>

								<div className="relative">
									<Field name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#3282B8] focus:outline-none transition-colors">
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
								</div>
                                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1"/>

								<div className="relative">
									<Field name="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
									<button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#3282B8] focus:outline-none transition-colors">
                                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
								</div>
                                <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm mt-1"/>

								<button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-[#0F4C75] hover:bg-[#3282B8] hover:scale-[1.02] active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 text-white py-3 rounded-xl">
									{
										isSubmitting ? (
											<>
                                                <Loader2 className="animate-spin" size={18} />
                                                Creating Account...
                                            </>
                                        ) : ("Create Account")
									}
								</button>

                                <div className="text-center mt-6">
                                    <p className="text-gray-500">
                                        Already have an account?
                                        <Link to="/login" className="ml-2 text-[#3282B8] font-semibold hover:text-[#0F4C75] hover:underline transition-colors">
                                            Login
                                        </Link>
                                    </p>
                                </div>
							</Form>
						)}
					</Formik>
				</div>
			</section>
		</PageTransition>
	);
};
export default Register;