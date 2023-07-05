import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import P_01_01 from "./pages/P_01/P_01_01";
import P_01_02 from "./pages/P_01/P_01_02";
import P_01_03 from "./pages/P_01/P_01_03";
import P_01_04 from "./pages/P_01/P_01_04";
import P_01_05 from "./pages/P_01/P_01_05";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/p0101" element={<P_01_01 />} />
      <Route path="/p0102" element={<P_01_02 />} />
      <Route path="/p0103" element={<P_01_03 />} />
      <Route path="/p0104" element={<P_01_04 />} />
      <Route path="/p0105" element={<P_01_05 />} />
    </Routes>
  );
}