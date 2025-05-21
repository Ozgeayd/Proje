import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Home from './components/Home';
import BenKimim from './components/BenKimim';
import NelerYapabilirim from './components/NelerYapabilirim';
import Projelerim from './components/Projelerim';
import Egitim from './components/Egitim';
import Iletisim from './components/Iletisim';

function AnimatedRoutes() {
    const location = useLocation();

    const pageVariants = {
        initial: { opacity: 0, x: 100 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -100 },
    };

    const pageTransition = {
        type: "tween",
        ease: "easeInOut",
        duration: 0.4,
    };

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <Home />
                    </motion.div>
                } />
                <Route path="/ben-kimim" element={
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <BenKimim />
                    </motion.div>
                } />
                <Route path="/neler-yapabilirim" element={
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <NelerYapabilirim />
                    </motion.div>
                } />
                <Route path="/projelerim" element={
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <Projelerim />
                    </motion.div>
                } />
                <Route path="/egitim" element={
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <Egitim />
                    </motion.div>
                } />
                <Route path="/iletisim" element={
                    <motion.div
                        initial="initial"
                        animate="in"
                        exit="out"
                        variants={pageVariants}
                        transition={pageTransition}
                        style={{ position: 'absolute', width: '100%' }}
                    >
                        <Iletisim />
                    </motion.div>
                } />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <AnimatedRoutes />
        </Router>
    );
}

export default App;
