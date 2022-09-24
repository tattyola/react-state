import {useState} from "react";

function App() {

    const [name, setName] = useState('react lesson');
    const changeName = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <input value={name} onChange={changeName}/>
        </div>
    );
}

export default App;
