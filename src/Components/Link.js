import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

const Link = ({children, destination}) => {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();
        navigate(destination);
    }
    return <a onClick={handleClick}>{children}</a>
}

export default Link;