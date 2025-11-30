import React from 'react'
import { useAuth } from '../../context/AuthContext'
import DashboardLayout from './DashboardLayout'

const Dashboard = () => {
    const { currentUser } = useAuth();

    return (
        <DashboardLayout>
            <div className='flex flex-col justify-center items-center min-h-[50vh]'>
                <h1 className='text-2xl font-bold mb-4'>Welcome to Dashboard</h1>
                {currentUser && <p className='text-gray-600'>Logged in as: <span className="font-semibold">{currentUser.email}</span></p>}
            </div>
        </DashboardLayout>
    )
}

export default Dashboard