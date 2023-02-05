import Dropdown from './Components/Dropdown';

const App = () => {
    const options = [
        {label: "Heesun", value: "m"},
        {label: "Heesun", value: "m"},
        {label: "Heesun", value: "m"},
        {label: "Heesun", value: "m"},
        {label: "Heesun", value: "m"},
        {label: "Heesun", value: "m"}
    ];
    return(
        <Dropdown options={options}/>
    );
}

export default App;