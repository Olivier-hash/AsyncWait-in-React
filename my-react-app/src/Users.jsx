import React, {useState, useEffect} from "react";



function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setUsers(data)
            
            } catch(error) {
                console.error('Error fetching users', error);
               
            } finally{
                setLoading(false)  // Always runs at the end
            }

        }
        fetchUsers();
    },[])


  return (
    <div>
    <h2>User List</h2>
    {loading ? (
      <p>Loading... ⏳</p>
    ) : (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default Users

// Copilot generated code

// import React, { useEffect, useState } from "react";

// const Users = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await fetch("https://jsonplaceholder.typicode.com/users");
//                 const data = await response.json();
//                 setUsers(data);
//             } catch (error) {
//                 console.error("Error fetching users:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h1>Users List</h1>
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Users;