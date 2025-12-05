import React, { useState } from "react";
import { auth, db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";


const Signup = () => {
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
            const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password, form.name);
            const user = userCredential.user;
            console.log(user);

            await storeUserProfile(user.uid, { name: formData.name, email: formData.email, password: formData.password });
            navigate("/dashboard");
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            setError(errorMessage);
        }
    };

    const storeUserProfile = async (uid, userData) => {
        try {
            await setDoc(doc(db, "users", uid), userData)

        } catch (error) {
            console.log(error, "unable to store user data")
        }
    };


    const [error, setError] = useState(null);

    return (
        <div className="flex flex-col m-4 justify-center items-center min-h-screen">
            <div className="bg-white p-4 rounded-xl shadow-md max-w-md w-full flex flex-col gap-2">


                <div className=" flex flex-col  justify-center gap-2 items-center">
                    <Link to="/"><img src="logo.png" alt="logo" className="w-24 h-10" />
                    </Link>
                    <h2 className="text-sm self-center italic mb-4">provide your details to signup</h2>
                </div>
                {error && <div className="bg-red-50 text-center rounded mb-6 border-red-500 text-red-500 p-2">{error}</div>}
                <div className="">
                    <form name="signup" className="flex flex-col justify-between gap-2" >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 bg-[var(--color-primary)]/10 focus:outline outline-[var(--color-primary)]  rounded-md p-3 mb-4"
                            placeholder="Name"
                            autoComplete="name"
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 bg-[var(--color-primary)]/10 focus:outline outline-[var(--color-primary)]  rounded-md p-3 mb-4"
                            placeholder="example@example.com"
                            required
                            autoComplete="email"
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="border border-gray-300 bg-[var(--color-primary)]/10 focus:outline outline-[var(--color-primary)]  rounded-md p-3 mb-4"
                            placeholder="Password"
                            required
                            autoComplete="current-password"
                        />
                        <button
                            type="submit"
                            className="bg-[var(--color-primary)] text-white font-bold px-6 py-4 mb-2 rounded-md cursor-pointer hover:bg-[var(--color-primary)] hover:brightness-90"
                            onClick={handleSubmit}
                        >
                            Signup

                        </button>
                    </form>
                    <div className="flex justify-center">
                        <p className="italic">Already have an account? <Link to="/login" className="text-[var(--color-primary)] font-semibold">Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
