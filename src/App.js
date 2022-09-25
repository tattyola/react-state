import {useState} from "react";

function App() {

    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operand, setOperand] = useState('+');
    const [result, setResult] = useState(0);

    const changeNumber1 = (e) => {
        isNaN(e.target.value) ? setNumber1(0) : setNumber1(+e.target.value);
        changeNumberOrOperand(e.target.value, number2, operand)
    }
    const changeNumber2 = (e) => {
        isNaN(e.target.value) ? setNumber2(0) : setNumber2(+e.target.value);
        changeNumberOrOperand(number1, e.target.value, operand)
    }
    const changeOperand = (e) => {
        const operand = e.target.value;
        changeNumberOrOperand(number1, number2, operand)
        setOperand(operand)
    }
    const changeNumberOrOperand = (n1, n2, op) => {
        if (op === '+') setResult(n1 + n2)
        if (op === '-') setResult(n1 - n2)
        if (op === '/') setResult(n1 / n2)
        if (op === '*') setResult(n1 * n2)
    }

    return (
        <div>
            <input value={number1} onChange={changeNumber1}/>
            <select value={operand} onChange={changeOperand}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="/">/</option>
                <option value="*">*</option>
            </select>
            <input value={number2} onChange={changeNumber2}/>
            <h1>{number1} {operand} {number2} = {result}</h1>
        </div>
    );
}

export default App;
