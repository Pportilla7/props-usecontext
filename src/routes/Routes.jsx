import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorProvider } from '../components/CalculatorProvider.jsx';
import Calculator from '../components/Calculator.jsx';
import Result from '../components/Result.jsx';

function App() {
    return (
        <CalculatorProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Calculator />} />
                    <Route path="/resultado" element={<Result />} />
                </Routes>
            </Router>
        </CalculatorProvider>
    );
}

export default App;
