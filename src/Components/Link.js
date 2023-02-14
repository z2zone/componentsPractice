import { useContext } from "react";
import NavigationContext from "../Context/Navigation";

const Link = ({children, destination}) => {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();
        navigate(destination);
    }
    return <a className="text-blue-500 cursor-pointer mb-3" onClick={handleClick}>{children}</a>
}

export default Link;