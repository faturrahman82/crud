import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  const deleteUsers = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="mt-5 w-[680px] mx-auto">
      <Link to={"/add"} className="px-2 py-1 bg-green-500 rounded mb-5">
        Add new
      </Link>
      <div>
        <table className="border-2 rounded w-full ">
          <thead className="border-b-2">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td className="flex gap-2 w-full justify-center items-center text-white text-sm">
                  <Link
                    to={`edit/${user.id}`}
                    className="bg-blue-500 font-semibold px-2 py-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUsers(user.id)}
                    className="bg-red-600 font-semibold px-2 py-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default UserList;
