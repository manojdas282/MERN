import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="sign-in" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
