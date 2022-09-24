import {useState} from "react";

const initialCounters = [
    {
        id: 123,
        value: 10
    },
    {
        id: 456,
        value: 100
    },
    {
        id: 789,
        value: 1000
    },
];

function App() {

    const [counts, setCounts] = useState(initialCounters)
    const minus = (id) => {
        console.log(id)
        const updatedCounts = counts.map(el => el.id === id ? {...el, value: el.value - 1} : el);
        setCounts(updatedCounts);
    }

    const plus = (id) => {
        console.log(id)
        const updatedCounts = counts.map(el => el.id === id ? {...el, value: el.value + 1} : el);
        setCounts(updatedCounts);
    }

    const addCounter = () => {
        const newCount = {
            id: Math.random(),
            value: 0
        };
        setCounts([...counts, newCount])
    }

    return (
        <div className="App">

            <ul>
                {counts.map(el => (
                    <li key={el.id}>
                        <button onClick={() => minus(el.id)}>Minus</button>
                        {el.value}
                        <button onClick={() => plus(el.id)}>Plus</button>
                    </li>
                ))}
            </ul>

            <hr/>
            <button onClick={addCounter}>Add counter</button>

        </div>
    );
}

export default App;
