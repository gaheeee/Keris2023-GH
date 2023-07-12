import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import P_01_01 from "./pages/P_01/P_01_01";
import P_01_02 from "./pages/P_01/P_01_02";
import P_01_03 from "./pages/P_01/P_01_03";
import P_01_04 from "./pages/P_01/P_01_04";
import P_01_05 from "./pages/P_01/P_01_05";
import P_01_06 from "./pages/P_01/P_01_06";
import P_01_07 from "./pages/P_01/P_01_07";

import P_02_01 from "./pages/P_02/P_02_01";
import P_02_02 from "./pages/P_02/P_02_02";
import P_02_03 from "./pages/P_02/P_02_03";
import P_02_04 from "./pages/P_02/P_02_04";
import P_02_05 from "./pages/P_02/P_02_05";
import P_02_06 from "./pages/P_02/P_02_06";
import P_02_07 from "./pages/P_02/P_02_07";
import P_02_08 from "./pages/P_02/P_02_08";
import P_02_09 from "./pages/P_02/P_02_09";
import P_02_10 from "./pages/P_02/P_02_10";
import P_02_11 from "./pages/P_02/P_02_11";
import P_02_12 from "./pages/P_02/P_02_12";
import P_02_13 from "./pages/P_02/P_02_13";
import P_02_14 from "./pages/P_02/P_02_14";
import P_02_15 from "./pages/P_02/P_02_15";
import P_02_16 from "./pages/P_02/P_02_16";
import P_02_17 from "./pages/P_02/P_02_17";
import P_02_18 from "./pages/P_02/P_02_18";
import P_02_19 from "./pages/P_02/P_02_19";
import P_02_20 from "./pages/P_02/P_02_20";


import P_03_01 from "./pages/P_03/P_03_01";
import P_03_02 from "./pages/P_03/P_03_02";

import DataTest from "./pages/DataTest";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/p0101" element={<P_01_01 />} />
      <Route path="/p0102" element={<P_01_02 />} />
      <Route path="/p0103" element={<P_01_03 />} />
      <Route path="/p0104" element={<P_01_04 />} />
      <Route path="/p0105" element={<P_01_05 />} />
      <Route path="/p0106" element={<P_01_06 />} />
      <Route path="/p0107" element={<P_01_07 />} />
      
      <Route path="/p0201" element={<P_02_01 />} />
      <Route path="/p0202" element={<P_02_02 />} />
      <Route path="/p0203" element={<P_02_03 />} />
      <Route path="/p0204" element={<P_02_04 />} />
      <Route path="/p0205" element={<P_02_05 />} />
      <Route path="/p0206" element={<P_02_06 />} />
      <Route path="/p0207" element={<P_02_07 />} />
      <Route path="/p0208" element={<P_02_08 />} />
      <Route path="/p0209" element={<P_02_09 />} />
      <Route path="/p0210" element={<P_02_10 />} />
      <Route path="/p0211" element={<P_02_11 />} />
      <Route path="/p0212" element={<P_02_12 />} />
      <Route path="/p0213" element={<P_02_13 />} />
      <Route path="/p0214" element={<P_02_14 />} />
      <Route path="/p0215" element={<P_02_15 />} />
      <Route path="/p0216" element={<P_02_16 />} />
      <Route path="/p0217" element={<P_02_17 />} />
      <Route path="/p0218" element={<P_02_18 />} />
      <Route path="/p0219" element={<P_02_19 />} />
      <Route path="/p0220" element={<P_02_20 />} />


      <Route path="/p0301" element={<P_03_01 />} />
      <Route path="/p0302" element={<P_03_02 />} />

      <Route path="/data" element={<DataTest />} />
    </Routes>
  );
}