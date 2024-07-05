import React from 'react';
import { CalculatorProvider } from './components/CalculatorProvider.jsx';
import AppRoutes from './routes/Routes.jsx';
import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <AppRoutes />
    </CalculatorProvider>
  );
}

export default App;


