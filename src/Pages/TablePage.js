import Table from "../Components/Table";

const TablePage = () => {
    const data = [
        {name:"Apple", color:"bg-red-500", score:100},
        {name:"Samsung", color:"bg-blue-500", score:80},
        {name:"Microsoft", color:"bg-orange-500", score:95},
        {name:"IBM", color:"bg-blue-500", score:70},
        {name:"Bloomberg", color:"bg-black-500", score:90},
        {name:"Salesforce", color:"bg-blue-500", score:85}
    ];
    return (
        <div>
            <Table data={data}/>
        </div>
    );
}

export default TablePage;