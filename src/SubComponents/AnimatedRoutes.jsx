import React from "react";

// Importing React Router:
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";

// Importing Components:
import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";
import Services from "../Components/Services.jsx";
import Projects from "../Components/Projects.jsx";
import Thought from "../Components/Thought.jsx";
import Contact from "../Components/Contact.jsx";

// Importing Framer Motion:
import { AnimatePresence } from "../../node_modules/framer-motion/dist/framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes
                    location={location}>
                    key={location.pathname}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/thought" element={<Thought />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </>
    );
};