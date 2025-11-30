import React from 'react';

const DashboardFooter = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-4 px-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} Nextcent. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-[var(--color-primary)]">Privacy Policy</a>
                    <a href="#" className="hover:text-[var(--color-primary)]">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default DashboardFooter;
