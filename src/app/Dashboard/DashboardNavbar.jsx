import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { PiBell, PiCaretDown, PiUser, PiList } from 'react-icons/pi';

const DashboardNavbar = ({ toggleSidebar }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg"
                >
                    <PiList size={24} />
                </button>
                <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full relative">
                    <PiBell size={24} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center gap-2 hover:bg-gray-50 p-2 rounded-lg transition-colors"
                    >
                        <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white">
                            <PiUser />
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-medium text-gray-700 max-w-[150px] truncate">
                                {currentUser?.email}
                            </p>
                        </div>
                        <PiCaretDown className={`text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20">
                            <div className="px-4 py-2 border-b border-gray-100">
                                <p className="text-xs text-gray-500">Signed in as</p>
                                <p className="text-sm font-medium truncate">{currentUser?.email}</p>
                            </div>
                            <button
                                onClick={() => navigate('/dashboard/profile')}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                Your Profile
                            </button>
                            <button
                                onClick={() => navigate('/dashboard/settings')}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            >
                                Settings
                            </button>
                            <div className="border-t border-gray-100 my-1"></div>
                            <button
                                onClick={handleSignOut}
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                            >
                                Sign out
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default DashboardNavbar;
