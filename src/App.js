import Dropdown from './Components/Dropdown';

const App = () => {
    const options = [
        {label: "hee", value: "m1"},
        {label: "mon", value: "m2"},
        {label: "min", value: "m3"},
        {label: "nic", value: "m4"},
        {label: "jung", value: "m5"},
        {label: "mar", value: "m6"}
    ];
    return(
        <Dropdown options={options}/>
    );
}

export default App;