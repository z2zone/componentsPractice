import Link from './Link';

const SideBar = () => {
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            <Link destination="/dropdown">Dropdown</Link>
            <Link destination="/">Accordion</Link>
        </div>
    );
}

export default SideBar;