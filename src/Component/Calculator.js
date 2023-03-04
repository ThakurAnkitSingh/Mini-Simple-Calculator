import React, { useState, useCallback, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleNumberChange = useCallback((event, setter) => {
        setter(Number(event.target.value));
    }, []);

    const handleAdd = useCallback(() => {
        setResult(num1 + num2);
    }, [num1, num2]);

    const handleSubtract = useCallback(() => {
        setResult(num1 - num2);
    }, [num1, num2]);

    const handleMultiply = useCallback(() => {
        setResult(num1 * num2);
    }, [num1, num2]);

    const handleDivide = useCallback(() => {
        setResult(num1 / num2);
    }, [num1, num2]);

    useEffect(() => {
        document.getElementById("num1").focus();
    }, []);

    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <div className="input-container">
                <input
                    type="number"
                    id="num1"
                    value={num1}
                    onChange={(event) => handleNumberChange(event, setNum1)}
                />
                <input
                    type="number"
                    id="num2"
                    value={num2}
                    onChange={(event) => handleNumberChange(event, setNum2)}
                />
            </div>
            <div className="button-container">
                <button className="operation" onClick={handleAdd}>
                    +
                </button>
                <button className="operation" onClick={handleSubtract}>
                    -
                </button>
                <button className="operation" onClick={handleMultiply}>
                    *
                </button>
                <button className="operation" onClick={handleDivide}>
                    /
                </button>
            </div>
            <h2>Result: {result}</h2>
        </div>
    );
}

export default Calculator;
