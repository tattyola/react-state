import {useState} from "react";

function App() {

    const [number1, setNumber1] = useState(10);
    const [number2, setNumber2] = useState(10);
    const changeNumber1 = (e) => {
        isNaN(e.target.value) ? setNumber1(0) : setNumber1(+e.target.value);

    }
    const changeNumber2 = (e) => {
        isNaN(e.target.value) ? setNumber2(0) : setNumber2(+e.target.value);
    }

    return (
        <div>
            <input value={number1} onChange={changeNumber1}/>
            <input value={number2} onChange={changeNumber2}/>
            <h1>{number1} + {number2} = {number1 + number2}</h1>
        </div>
    );
}

export default App;
