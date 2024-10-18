import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProtectedRoutes from "./Services/ProtectedRoutes";
import AdminDashBoard from "./Pages/AdminDashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin" element={<AdminDashBoard/>}></Route>
          <Route  element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home />}> 
          </Route> </Route>
         
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
