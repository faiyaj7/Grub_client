import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Home />} />
        <Route path="/restaurants/menu/:id" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
