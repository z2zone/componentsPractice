import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {

    const [windowPath, setWindowPath] = useState(window.location.pathname);
    useEffect = (()=>{
        const handler = () =>{
            setWindowPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);
    
        return () => {
            window.removeEventListener('popstate', handler);
        }
    },[]);

    const navigate = (destination) => {
        window.history.pushState({}, '', destination);
        setWindowPath(destination);
    }

    return (
        <NavigationContext.Provider value={{ windowPath, navigate }}>
            {children}
        </NavigationContext.Provider>  
    );
}

export { NavigationProvider };
export default NavigationContext;