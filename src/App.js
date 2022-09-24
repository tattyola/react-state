import {useState} from "react";

const arr = [
    {
        id: 1,
        value: 100
    },
    {
        id: 2,
        value: 1000
    },
    {
        id: 3,
        value: 10
    },
];

function App() {
   const [counter, setCounter] = useState(arr);
   const minus = (id) => {
       const updatedCounter = counter.map(el => el.id === id ? {...el, value: el.value - 1} : el)
       setCounter(updatedCounter);
   }
    const plus = (id) => {
        const updatedCounter = counter.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setCounter(updatedCounter);
    }
    const addCounter = () => {
       const newEl = {
           id: Math.random(),
           value: 0
       }
        setCounter([...counter, newEl])
    }
    const deleteCounter = (id) => {
        const updatedCounter = counter.filter(el => el.id !== id)
        setCounter([...updatedCounter])
    }

    return (
        <div>
            <ul>
                {counter.map(el =>
                    <li key={el.id}>
                        <button onClick={() => {minus(el.id)}}>Minus</button>
                        {el.value}
                        <button onClick={() => {plus(el.id)}}>Plus</button>
                        <button onClick={() => deleteCounter(el.id)}>Delete</button>
                    </li>
                )}
            </ul>
            <hr/>
            <button onClick={addCounter}>Add counter</button>
        </div>
    );
}

export default App;
