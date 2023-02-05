import Accordion from './Components/Accordion';

const App = () => {
    const dummyText = [
        {
            label: "title1",
            content: "what is your favorite movie?",
            id:"1"
        },
        {
            label: "title2",
            content: "my favorite movie is Grand Budapest Hotel",
            id:"2"
        },
        {
            label: "title2",
            content: "my favorite movie is Grand Budapest Hotel",
            id:"3"
        },
        {
            label: "title2",
            content: "my favorite movie is Grand Budapest Hotel",
            id:"4"
        },
        {
            label: "title2",
            content: "my favorite movie is Grand Budapest Hotel",
            id:"5"
        },
        {
            label: "title2",
            content: "my favorite movie is Grand Budapest Hotel",
            id:"6"
        }
    ];
    return <div>
        <Accordion dummyText={dummyText}/>
    </div>;
}

export default App;