
import { useForm } from "react-hook-form";
import image from "../../assets/image/painting.jpg"
import "../../style.css"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Context";
import Swal from "sweetalert2";
import GoogleLogin from "../../SocialLogin/GoogleLogin";


const SignUp = () => {
    let [loading, setLoading] = useState(false);
    const { createAccount, userUpdate } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        setLoading(true)
        createAccount(data.email, data.password)
            .then(result => {
                console.log(result.user)
                userUpdate(data.name)
                    .then(() => {
                        console.log("user Upadated")
                        Swal.fire({
                            title: 'Success',
                            text: 'User Created Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    })
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
                Swal.fire({
                    title: 'Error',
                    text: 'Email already in use',
                    icon: 'error',
                    confirmButtonText: 'close'
                })
                setLoading(false)
            });
    }

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="">
                <div className="hero ">
                    <div className="hero w-full max-w-md  space-y-3 rounded-xl">
                        <div className="hero-overlay w-full p-8 shadow-2xl  rounded-xl">
                            <h1 className="text-3xl text-center text-white mb-5 primary">Create an Account</h1>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                                <div className="space-y-1 text-sm">
                                    <input type="text"
                                        name="name"
                                        placeholder="User Name"
                                        className="w-full px-4 py-3  border-b-2 border-gray-500 text-sm md:text-base text-black input-style input-bordered join-item rounded-3xl  font-bold"
                                        {...register("name", { required: true })} />
                                    {errors.name && <span className="ml-3  text-red-500 text-sm">This field is required</span>}

                                </div>
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
                            <p className="text-xs text-center sm:px-6 text-white">already have an account please
                                <a rel="noopener noreferrer" href="#" className="underline text-white ml-2"><Link to="/login">Login</Link></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;