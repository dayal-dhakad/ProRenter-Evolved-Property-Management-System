import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signUp" element={<Register />} />
          <Route path="/signIn" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
