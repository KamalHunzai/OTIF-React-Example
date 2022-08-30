import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<Search />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
