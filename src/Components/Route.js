import { useContext } from 'react';
import NavigationContext from '../Context/Navigation';

const Route = ({destination, children}) => {
    const { windowPath } = useContext(NavigationContext);
    if(windowPath === destination){
        return children;
    }else{
        return null;
    }
}

export default Route;