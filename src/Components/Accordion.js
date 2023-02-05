import {GoChevronDown, GoChevronLeft} from "react-icons/go";
import {useState} from "react";

const Accordion = ({dummyText}) => {
    const [expandedIndex, setExpandedIndex] = useState(0);

    const hadleAccordionClick = (openIndex) => {
        setExpandedIndex((current)=>{
            if(current === openIndex){
                return -1;
            }
            return openIndex;
        });
        // Functional setState gives you the most updated piece of state. 
        // It is useful if the new state value is dependate on old state value. 

        // if (expandedIndex === openIndex){
        //     setExpandedIndex(-1);  
        // }else{
        //     setExpandedIndex(openIndex);   
        // }
    }

    const renderedContent = dummyText.map((accordion,index)=>{
        const isExpanded = index === expandedIndex;

        return(
            <div key={accordion.id}>
                <div 
                    className="flex p-3 bg-gray-50 border-b items-center- cursor-pointer justify-between"
                    onClick={()=>{hadleAccordionClick(index)}}
                >
                    {accordion.label} <span>{isExpanded?<GoChevronDown/>:<GoChevronLeft/>}</span>
                </div>
                {isExpanded && <div className="border-b p-5">{accordion.content}</div>}
            </div>
        );
    })

    return (
        <div className="border-x border-t roudned">
            {renderedContent}
        </div>
    );
}
export default Accordion;