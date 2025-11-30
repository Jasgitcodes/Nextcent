import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log(user);
            navigate("/dashboard");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            navigate("/login");
            console.log(errorCode, errorMessage);
            setError(errorMessage);
        }
    };
    const [error, setError] = useState(null);
    return (
        <div className="flex flex-col m-4 justify-center items-center min-h-screen">
            <div className="bg-white p-4 rounded-xl shadow-md max-w-md w-full flex flex-col gap-2">


                <div className=" flex flex-col  justify-center gap-2 items-center">
                    <Link to="/"><img src="logo.png" alt="logo" className="w-24 h-10" />
                    </Link>
                    <h2 className="text-sm self-center italic mb-4">Enter your Login details</h2>
                </div>

                {error && <div className="bg-red-50 border-red-500 mb-4 rounded-md text-red-500 text-center p-2">{error}</div>}
                <div className="flex flex-col gap-2">
                    <form name="login" action="" className="flex flex-col justify-between gap-2" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                            className="border border-gray-300 bg-[var(--color-primary)]/10 focus:outline outline-[var(--color-primary)]  rounded-md p-3 mb-4"
                            placeholder="example@example.com"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            className="border border-gray-300 bg-[var(--color-primary)]/10 focus:outline outline-[var(--color-primary)]  rounded-md p-3 mb-4"
                            placeholder="Password"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[var(--color-primary)] text-white font-bold px-6 py-4 mb-2 rounded-md cursor-pointer hover:bg-[var(--color-primary)]  hover:brightness-90"
                            onClick={handleSubmit}
                        >
                            Sign in

                        </button>
                    </form>
                    <div className="flex justify-center">
                        <p className="italic">Don't have an account? <Link to="/signup" className="text-[var(--color-primary)] font-semibold">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
