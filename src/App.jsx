import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleRestaurantMenu from "./components/SingleRestaurantMenu";
import Cart from "./pages/Cart";

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
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
