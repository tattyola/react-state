import {useState} from "react";

const operands = ['+', '-', '*'];

function random(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandoOper = () => operands[random(0, 2)]
const randomNumber = () => random(0, 10)

const calculate = (n1, n2, operand) => {
    if (operand === '+') return n1 + n2
    if (operand === '-') return n1 - n2
    if (operand === '*') return n1 * n2
}

function App() {
    const n1Initial = randomNumber()
    const n2Initial = randomNumber()
    const operandInitial = getRandoOper()

    const [n1, setN1] = useState(n1Initial);
    const [n2, setN2] = useState(n2Initial);
    const [operand, setOperand] = useState(operandInitial);
    const [result, setResult] = useState(calculate(n1Initial, n2Initial, operandInitial));
    const [answer, setAnswer] = useState()
    const [resolution, setResolution] = useState('');

    const shake = () => {
        const n1 = randomNumber(), n2 = randomNumber(), operand = getRandoOper()
        setN1(n1)
        setN2(n2)
        setOperand(operand)
        setResult(calculate(n1, n2, operand))
    }
    const check = () => {
        (answer === result) ? setResolution('Correct') : setResolution('Incorrect')
        shake()
        setAnswer('')
    }

    return (
        <div>
            {n1} {operand} {n2} =
            <input type="number" value={answer}
                   onChange={e => setAnswer(+e.target.value)}/>
            <button onClick={check}>Check</button>
            <hr/>
            {resolution}
            <button onClick={shake}>Shake</button>
            <hr/>
            {result}
        </div>
    )
}

export default App;

