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

