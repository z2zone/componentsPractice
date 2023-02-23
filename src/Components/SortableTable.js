import { useState } from 'react';
import Table from './Table';

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const { dataConfig } = props;
    
    const handleClick = (label) =>{
        if(sortOrder === null){
            setSortOrder('asc');
            setSortBy(label);
        }else if(sortOrder === 'asc'){
            setSortOrder('desc');
            setSortBy(label);
        }else if(sortOrder ==='desc'){
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedDataConfig = dataConfig.map((columnObject)=>{
        if(columnObject.sortValue){
            return {
                ...columnObject,
                header: () => <th onClick={()=>{handleClick(columnObject.label)}}>{columnObject.label} sortable</th>
            };
        }else{
            return columnObject;
        }
    });

    return <Table {...props} dataConfig={updatedDataConfig}/>;
}

export default SortableTable;