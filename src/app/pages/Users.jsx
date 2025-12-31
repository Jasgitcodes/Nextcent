import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();

                const users = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    address: `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`,
                }))
                setUsers(users);
                console.log(users);
            } catch (err) {
                console.log(err);
                setError(err.message);
            }
        }
        fetchUsers();
    }, [])
    return (
        <div className="flex flex-col w-full bg-gray-300 mt-10 mb-10 max-w-md mx-auto rounded-xl p-2 shadow justify-between items-center h-[70vh] overflow-y-hidden" >
            <h1 className='font-bold text-2xl'>Users</h1>
            {error && (<div className="bg-red-50 text-center rounded mb-6 border-red-500 text-red-500 p-2">{error}</div>)}
            <ul className="list-none overflow-y-auto no-scrollbar h-[60vh] p-2  flex flex-col gap-4">
                {users.map((user) => (
                    <li key={user.id}>
                        <h2 className='font-bold'>{user.name}</h2>
                        <p className='font-semibold text-sm'>{user.email}</p>
                        <p className='font-semibold text-sm'>{user.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users