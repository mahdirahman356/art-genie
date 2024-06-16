import { useForm } from "react-hook-form";
import image from "../../assets/image/painting.jpg"
import "../../style.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";
import GoogleLogin from "../../SocialLogin/GoogleLogin";
const Login = () => {

    let [loading, setLoading] = useState(false);
    const { loginUser } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        setLoading(true);
        loginUser(data.email, data.password)
            .then(result => {
                console.log(result)
                Swal.fire({
                    title: "Success",
                    text: "User Added Successfully",
                    icon: "success"
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
                Swal.fire({
                    title: "Error",
                    text: "User is not available",
                    icon: "error",
                    cancelButtonColor: "#d33",
                });
                setLoading(false);
            });
    }

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="">
                    <div className="hero ">
                        <div className="hero w-full max-w-md  space-y-3 rounded-xl">
                            <div className="hero-overlay w-full p-8 shadow-2xl  rounded-xl">
                                <h1 className="text-2xl text-center text-white mb-5 primary">Login Your Account</h1>
                                <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                                    <div className="space-y-1 text-sm">
                                        <input type="text"
                                            name="email"
                                            placeholder="Email Address"
                                            className="w-full px-4 py-3  border-b-2 border-gray-500 text-sm md:text-base text-black input-style input-bordered join-item rounded-3xl  font-bold"
                                            {...register("email", { required: true })} />
                                        {errors.email && <span className="ml-3  text-red-500 text-sm">This field is required</span>}

                                    </div>
                                    <div className="space-y-1 text-sm">
                                        <input type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="w-full px-4 py-3  border-b-2 border-gray-500 text-sm md:text-base text-black input-style input-bordered join-item rounded-3xl  font-bold"
                                            {...register("password", { required: true })} />
                                        {errors.password && <span className="ml-3 text-red-500 text-sm">This field is required</span>}

                                    </div>
                                    <button className="cartoon-button-2 bg-orange-600 text-white py-2 px-4 text-sm font-bold rounded-3xl w-full">
                                        {loading ?
                                            <span className="loading loading-spinner text-white"></span>
                                            : "Continue"}
                                    </button>
                                </form>
                                <GoogleLogin></GoogleLogin>
                                <p className="text-xs text-center sm:px-6 text-white">Don not have an account?
                                    <a rel="noopener noreferrer" href="#" className="underline text-white"><Link to="/sign-up">Sign up</Link></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;