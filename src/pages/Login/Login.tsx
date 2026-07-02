import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import PageTransition from "../../components/common/PageTransition";
import { useAuth } from "../../hooks/useAuth";

const LoginSchema = Yup.object({
    login: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    
    return (
		<PageTransition>
			<section className="min-h-screen bg-[#F9F7F7] flex justify-center items-center px-6">
				<div data-aos="zoom-in-up" className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md">
					<h1 className="text-4xl font-bold text-[#0F4C75] text-center"> Welcome Back </h1>
					<p className="text-center text-gray-500 mt-4"> Sign in to continue your adventure </p>
					<Formik
						initialValues={{
                            login:"",
                            password:"",
                        }}

                        validationSchema={LoginSchema}
                        onSubmit={async(values,{setSubmitting})=>{
                            try {
                                    await login(values.login, values.password);;
                                    toast.success("Login successful!");
                                    navigate("/");
                                } catch (error: any) {
                                    const message = error?.message ?? "";
                                    toast.error(message || "Invalid email or password.");
                                } finally {
                                    setSubmitting(false);
                                }
                        }}
					>
						{({ isSubmitting }) => (
							<Form className="space-y-5 mt-8">
								<div>
                                    <Field name="login" type="email" placeholder="Email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
                                    <ErrorMessage name="login" component="p" className="text-red-500 text-sm mt-1"/>
                                </div>

                                <div className="relative">
                                    <Field name="password" type={showPassword ? "text" : "password"} placeholder="Password" className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#3282B8]"/>
                                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#3282B8] transition-colors">
                                        {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                    </button>
                                </div>
                                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1"/>

								<button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-[#0F4C75] hover:bg-[#3282B8] hover:scale-[1.02] active:scale-95 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 text-white py-3 rounded-xl ">
                                    {
                                        isSubmitting
                                            ? (
                                                <>
                                                    <Loader2 className="animate-spin" size={18}/>
                                                    Signing In...
                                                </>
                                            )
                                            : "Login"
                                    }
                                </button>

                                <div className="text-center mt-6">
                                    <p className="text-gray-500">
                                        Don't have an account?
                                        <Link to="/register" className="ml-2 text-[#3282B8] font-semibold hover:text-[#0F4C75] hover:underline transition-colors">
                                            Register
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
}

export default Login;