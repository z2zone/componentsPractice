import Dropdown from './Components/Dropdown';
import {useState} from 'react';

const App = () => {

    const [selected, setSelection] = useState(null);
    const handleSelection = (option) => {
        setSelection(option);
    }
    const options = [
        {label: "hee", value: "m1"},
        {label: "mon", value: "m2"},
        {label: "min", value: "m3"},
        {label: "nic", value: "m4"},
        {label: "jung", value: "m5"},
        {label: "mar", value: "m6"}
    ];
    return(
        <Dropdown options={options} onChange={handleSelection} value={selected}/>
    );
}

export default App;