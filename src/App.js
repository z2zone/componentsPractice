import SideBar from './Components/SideBar';
import Route from './Components/Route';
import DropdownPage from './Pages/DropdownPage';
import AccordionPage from './Pages/AccordionPage';
import ModalPage from './Pages/ModalPage';
import TablePage from './Pages/TablePage';

const App = () => {

    return(
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar/>
            <Route destination="/">
                <AccordionPage/>
            </Route>
            <Route destination="/dropdown">
                <DropdownPage/>
            </Route>
            <Route destination="/modal">
                <ModalPage/>
            </Route>
            <Route destination="/table">
                <TablePage/>
            </Route>
        </div>
    );
}

export default App;