import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Finish from "../pages/components/Finish";
import Plan from "../pages/components/Plan";
import Welcome from "../pages/components/Welcome";
import Workspace from "../pages/components/Workspace";
import Home from "../pages/Home";

const Routing = () => (
    <Router>
        <Routes>
            <Route path="" element={<Home />}>
                <Route path="/" element={<Welcome />} />
                <Route path="/workspace" element={<Workspace />} />
                <Route path="/plan" element={<Plan />} />
                <Route path="/finish" element={<Finish />} />
            </Route>
        </Routes>
    </Router>
);

export default Routing;
