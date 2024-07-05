import React, { useContext, useState } from 'react';
import { CalculatorContext } from './CalculatorProvider.jsx';
import { Link } from 'react-router-dom';

const Calculator = () => {
    const { addNumber } = useContext(CalculatorContext);
    const [currentNumber, setCurrentNumber] = useState('');

    const handleNumberClick = (num) => {
        setCurrentNumber(num.toString());
        addNumber(parseInt(num, 10));
    };

    return (
        <div>
            <h1>Current Number: {currentNumber}</h1> {/* Muestra el número actual */}
            {[...Array(10).keys()].map(num => (
                <button key={num} onClick={() => handleNumberClick(num.toString())}>
                    {num}
                </button>
            ))}
            <Link to="/resultado">Ver Resultado</Link>
            <button onClick={() => setCurrentNumber('')}>Clear</button> {/* Botón para limpiar el número actual */}
        </div>
    );
};

export default Calculator;
