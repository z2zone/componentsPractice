import Link from './Link';

const SideBar = () => {
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            <Link destination="/">Accordion</Link>
            <Link destination="/dropdown">Dropdown</Link>  
            <Link destination="/modal">Modal</Link>
        </div>
    );
}

export default SideBar;