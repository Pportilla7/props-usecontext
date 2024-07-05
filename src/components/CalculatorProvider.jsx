import React, { createContext, useState } from 'react';

export const CalculatorContext = createContext();

export const CalculatorProvider = ({ children }) => {
    const [numbers, setNumbers] = useState([]);
    const addNumber = (number) => {
        setNumbers([...numbers, number]);
    };
    const resetCalculator = () => setNumbers([]);

    return (
        <CalculatorContext.Provider value={{ numbers, addNumber, resetCalculator }}>
            {children}
        </CalculatorContext.Provider>
    );
};
