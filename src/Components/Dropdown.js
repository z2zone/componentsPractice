import {useState, useRef, useEffect} from 'react';
import {GoChevronDown} from 'react-icons/go'

const Dropdown = ({options, onChange, value}) => {
    const [isOpen, setIsOpen] = useState(false);
    const el = useRef();

    useEffect(()=>{
        const handler = (event) =>{
            if(!el.current){
                return;
            }else if(!el.current.contains(event.target)){
                setIsOpen(false);
            }
        }
        document.addEventListener('click', handler, true);
        
        return () => {
            document.removeEventListener('click', handler);
        };
    },[]);

    const handleOptionClick = (selectedOption) =>{
        setIsOpen(false);
        onChange(selectedOption);
    }

    const handleToggleOpen = () =>{
        setIsOpen(!isOpen);
    }

    const renderedList = options.map(option=>{
        return(
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1" 
                key={option.value}
                onClick={()=>handleOptionClick(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={el} className="w-48 relative">
            <div 
                onClick={handleToggleOpen}
                className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
            >
                {value?.label || "Select..."} 
                <GoChevronDown/>
            </div>
            {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedList}</div>}
        </div>
    );
}

export default Dropdown;