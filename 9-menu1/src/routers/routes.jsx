import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Home } from "../pages/Home";
import {Products} from "../pages/Products"
import {Reports} from "../pages/Reports"
export function MyRoutes() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/reports" element={<Reports/>} />
      </Routes>
    </BrowserRouter>
  );
}
