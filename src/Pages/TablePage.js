import Table from "../Components/Table";
import SortableTable from "../Components/SortableTable";


const TablePage = () => {

    const data = [
        {name:"Apple", color:"bg-red-500", score:100},
        {name:"Samsung", color:"bg-blue-500", score:80},
        {name:"Microsoft", color:"bg-orange-500", score:95},
        {name:"IBM", color:"bg-blue-500", score:70},
        {name:"Bloomberg", color:"bg-black", score:90},
        {name:"Salesforce", color:"bg-blue-500", score:85}
    ];

    const dataConfig = [
        {
            label: "Company", 
            render: (obj) => obj.name,
            sortValue: (obj) => obj.name
        },
        {
            label: "Color", 
            render: (obj) => <div className={`p-3 m-2 ${obj.color}`}></div>
        },
        {
            label: "Score", 
            render: (obj) => obj.score,
            sortValue: (obj) => obj.score
        }
    ];
    
    return (
        <div>
            <SortableTable data={data} dataConfig={dataConfig}/>
        </div>
    );
}

export default TablePage;