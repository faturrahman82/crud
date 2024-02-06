import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUsers = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("Male");

  const { id } = useParams();

  console.log(name.data);

  React.useEffect(() => {
    getUsersById;
  }, []);

  const updateUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUsersById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`, {
      setName: response.data.name,
      setEmail: response.data.email,
      setGender: response.data.gender,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Formulir</h1>
      <form onSubmit={updateUsers}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Nama
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Name"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-600"
          >
            Gender
          </label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditUsers;
