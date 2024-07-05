import React, { useContext } from 'react';
import { CalculatorContext } from './CalculatorProvider.jsx';
import { Link } from 'react-router-dom';

const Result = () => {
    const { numbers, resetCalculator } = useContext(CalculatorContext);
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return (
        <div>
            <h1>Resultado: {sum}</h1>
            <div>Números seleccionados: {numbers.join(', ')}</div>
            <button onClick={resetCalculator}>Reset</button>
            <Link to="/">Volver a la calculadora</Link>
        </div>
    );
};

export default Result;
