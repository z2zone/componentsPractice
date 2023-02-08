import {useState} from 'react';

const Dropdown = ({options, handleSelection, selected}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (selectedOption) =>{
        setIsOpen(false);
        handleSelection(selectedOption);
    }

    const handleToggleOpen = () =>{
        setIsOpen(!isOpen);
    }

    const renderedList = options.map(option=>{
        return(
            <div 
                key={option.value}
                onClick={()=>{handleOptionClick(option)}}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div>
            <div onClick={handleToggleOpen}>{selected?.label || "Select"}</div>
            {isOpen && renderedList}
        </div>
    );
}

export default Dropdown;