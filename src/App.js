import Link from './Components/Link';
import Route from './Components/Route';
import DropdownPage from './Pages/DropdownPage';
import AccordionPage from './Pages/AccordionPage';

const App = () => {

    return(
        <div>
            <Link destination="/dropdown">Dropdown</Link>
            <Link destination="/accordion">Accordion</Link>
            <Route destination="/accordion">
                <AccordionPage/>
            </Route>
            <Route destination="/dropdown">
                <DropdownPage/>
            </Route>
        </div>
    );
}

export default App;