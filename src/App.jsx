import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router";
import Home from "./pages/home";
import FilmDetail from "./pages/detail";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
