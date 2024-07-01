import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleRestaurantMenu from "./components/SingleRestaurantMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Shop />} />
        <Route
          path="/restaurants/menu/:id"
          element={<SingleRestaurantMenu />}
        />
      </Routes>
    </>
  );
}

export default App;
