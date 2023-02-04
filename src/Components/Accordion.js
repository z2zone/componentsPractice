const Accordion = ({dummyText}) => {
    return (
        <div>
            {dummyText.map(accordion=>{
                return(
                    <div key={accordion.id}>
                        <div>{accordion.label}</div>
                        <div>{accordion.content}</div>
                    </div>
                );
            })}
        </div>
    );
}
export default Accordion;