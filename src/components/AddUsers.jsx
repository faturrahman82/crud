import axios from "axios";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from "../atoms";

const AddUsers = () => {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("Male");

  const saveUsers = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name,
        email,
        gender,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const methods = useForm();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 rounded-md">
      <h1 className="text-2xl font-bold mb-4">Formulir</h1>

      <FormProvider {...methods}>
        <form onSubmit={saveUsers}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
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
              id="email"
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
              id="gender"
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
            Save
          </button>
        </form>
      </FormProvider>
    </div>
  );
};

export default AddUsers;
