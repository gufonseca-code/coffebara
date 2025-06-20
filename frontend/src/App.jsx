import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { AnimatePresence} from 'framer-motion';
import { Navbar } from './components/Navbar.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { NotFound } from './pages/NotFound.jsx';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <AnimatePresence mode="wait" initial={false}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>    
            </AnimatePresence>
        </BrowserRouter>
    );
}
export default App;

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatedPresence } from "framer-motion" ;

export function NavBar() {
    const [open, setOpen] = useState(false);

    const base = "block py-2 md:py-0 md:inline-block text-gray-600 hover:text-brown-700 transition";
    const active = "front-semibold text-berown-700";

    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-4 flex otems-center justify-between h-16">
                <Link to="/" className="text-2xl front-bold text-brown-700 flex items-center gap-1">
                    ☕ Café&nbsp;<span className="hidden sm:inline">Bara</span>
                </Link>

                <nav className="hidden md:flex space-x-6">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? active : base)}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? active : base)}>
                        About
                    </NavLink>
                </nav>

                <button
                    className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500" onClick={() => setOpen(!open)}>  
                    {open ? <X size={24} /> : <Menu size={24} />}    
                </button>
            </div>

            <AnimatedPresence>
                {open && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1}}
                        exit={{ height: 0, opacity: 0}}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white shadow-lg"
                    >
                        <div className="px-4 pb-4 space-y-2">
                            <NavLink to="/" end onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? active : base)}>
                                Home
                            </NavLink>
                            <NavLink to="/about" end onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? active : base)}>
                                Sobre
                            </NavLink>
                        </div>
                        </motion.nav>
                )}
            </AnimatedPresence>
        </header>
    );
}

import { motion }from "framer-motion";

export function Home() {
    return (
        <motion.main
            className="container mx-auto p-6 grid place-items-center min-h-[calc(100vh-4rem)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            >
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl front-extrabold text-brown-700">Bem-vindo ao Coffebara!</h1>
                    <p className="text-lg text-gray-600">A cafeteria perfeita para Capivaras.</p>
                </section>
        </motion.main>
    );
}

import { motion } from "framer-motion";

export function About() {
    return(
        <motion.main
        className="container mx-auto p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            <h2 className="text-3xl font-bold mb-4 text-brown-700">Sobre o Coffebara</h2>
            <p className="text-gray-700 leading-relaxed">
                O Coffebara é uma cafeteria dedicada a servir as melhores bebidas e petiscos para capivaras e seus amigos. 
                Nossa missão é proporcionar um ambiente acolhedor e divertido, onde todos possam desfrutar de um bom café e companhia.
            </p>
        </motion.main>
    );
}

export function NotFound() {
    return(
        <main className="grid place-items-center h-[80vh] text-center space-y-2">
            <h1 className="text-5xl font-bold text-brown-700">404</h1>
            <p className="text-gray-600">Página não encontrada.</p>
        </main>
    );
}

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
