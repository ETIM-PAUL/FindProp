import "antd/dist/antd.css";
import Home from "./components/FrontPage/Home";
import Property from "./components/SingleProperty/Property";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Properties from "./components/AllProperties/Properties";
import Navbar from "./components/TopNav/Header";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="properties/" element={<Properties />}></Route>
          <Route path="property/:propid" element={<Property />}></Route>
          <Route>404 Not Found</Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
