import { createContext, useEffect, useState } from "react";

// 1. Create Context
const NavigationContext = createContext();

// 2. Create Provider with the context and pass in value props that need to be shared
const NavigationProvider = ({children}) => {

    const [windowPath, setWindowPath] = useState(window.location.pathname);
    useEffect = (()=>{
        const handler = () =>{
            setWindowPath(window.location.pathname);
        }
        window.addEventListener('popstate', handler);
    
        return () => {
            window.removeEventListener('popstate', handler);
        };
    }, []);

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

// 3. Export it
export { NavigationProvider };
export default NavigationContext;