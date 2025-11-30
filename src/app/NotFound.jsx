import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
// import { auth } from '../../config/firebase';
import { useAuth } from '../context/AuthContext';

const NotFound = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-bg)] text-center px-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center">
                <FaExclamationTriangle className="text-6xl text-[var(--color-primary)] mb-6" />
                <h1 className="text-4xl font-bold mb-2 text-gray-800">404</h1>
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">Page Not Found</h2>
                <p className="text-gray-600 mb-8">
                    Oops! The page you are looking for does not exist or has been moved.
                </p>
                <button
                    onClick={currentUser ? () => navigate('/dashboard') : () => navigate('/')}
                    className="bg-[var(--color-primary)] text-white font-bold px-6 py-3 rounded-md hover:brightness-90 transition-all duration-300 w-full"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
