import React from "react";
import {Route, Routes, useLocation} from "react-router-dom"
import Chat from "../pages/chat/index";
import Categories from "../pages/categories/index";
import {AnimatePresence} from "framer-motion/dist/framer-motion";

function AnimatedRoutes(){

    const location = useLocation();

    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/chat" element={<Chat />} />
            <Route path="/categories" element={<Categories />} />
        </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;