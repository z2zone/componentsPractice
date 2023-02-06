import {useState} from 'react';

const Dropdown = ({options}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (selectedOption) =>{
        console.log(selectedOption);
        setIsOpen(false);
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
            <div onClick={handleToggleOpen}>Select...</div>
            {isOpen && renderedList}
        </div>
    );
}

export default Dropdown;