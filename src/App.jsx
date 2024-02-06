import { Route, Routes } from "react-router-dom";
import UserList from "./components/userList";
import AddUsers from "./components/AddUsers";
import EditUsers from "./components/EditUsers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<AddUsers />} />
      <Route path="/edit/:id" element={<EditUsers />} />
    </Routes>
  );
}

export default App;
