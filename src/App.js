import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tshirt from "./pages/Tshirt";
import Jacket from "./pages/Jacket";
import Jeans from "./pages/Jeans";

const App = () => {
    return (
        //Test
        <Router>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tshirt" element={<Tshirt />} />
            <Route path="/jacket" element={<Jacket />} />
            <Route path="/jeans" element={<Jeans />} />
        </Routes>
        </Router>
    );
};

export default App;
