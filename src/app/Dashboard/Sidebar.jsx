import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiSquaresFour, PiUsers, PiGear, PiSignOut, PiX } from 'react-icons/pi';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();

    const links = [
        { name: 'Overview', path: '/dashboard', icon: <PiSquaresFour size={20} /> },
        { name: 'Profile', path: '/dashboard/profile', icon: <PiUsers size={20} /> },
        { name: 'Settings', path: '/dashboard/settings', icon: <PiGear size={20} /> },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`
                fixed md:static inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 flex flex-col transition-transform duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            `}>
                <div className="p-6 flex items-center justify-between border-b border-gray-100">
                    <Link to="/">
                        <img src="/logo.png" alt="Nextcent" className="h-8" />
                    </Link>
                    <button
                        onClick={toggleSidebar}
                        className="md:hidden p-1 text-gray-500 hover:bg-gray-100 rounded"
                    >
                        <PiX size={20} />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto py-4">
                    <ul className="space-y-1 px-3">
                        {links.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    onClick={() => isOpen && toggleSidebar()}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${location.pathname === link.path
                                        ? 'bg-[var(--color-primary)] text-white'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--color-primary)]'
                                        }`}
                                >
                                    {link.icon}
                                    <span className="font-medium">{link.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="bg-[var(--color-accent)] rounded-lg p-4">
                        <h4 className="font-semibold text-sm mb-1">Need Help?</h4>
                        <p className="text-xs text-gray-500 mb-3">Check our docs</p>
                        <button className="w-full bg-white text-[var(--color-primary)] text-xs font-bold py-2 rounded shadow-sm hover:shadow transition-shadow">
                            Documentation
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
