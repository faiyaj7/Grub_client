import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SingleRestaurantMenu from "./components/SingleRestaurantMenu";
import Cart from "./pages/Cart";
import NoRoute404 from "./pages/NoRoute404";

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
        <Route path="*" element={<NoRoute404 />} />
      </Routes>
    </>
  );
}

export default App;
