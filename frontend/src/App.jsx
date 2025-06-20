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
