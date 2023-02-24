import { useState } from 'react';
import Table from './Table';

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const {dataConfig, data} = props;
    
    let sortedData = data;
    if(sortOrder && sortBy){
        // Find object with the label that is equal to soryBy
        const foundObject = dataConfig.find(column => column.label === sortBy);
        sortedData = [...data].sort((a,b)=>{
            const valA = foundObject.sortValue(a);
            const valB = foundObject.sortValue(b);
            
            const isReverse = sortOrder === 'asc' ? 1 : -1; 
            if(typeof valA === 'string'){
                return valA.localeCompare(valB) * isReverse;
            }else{
                return (valA - valB) * isReverse;
            }
        });
    }
    
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

    return <Table {...props} data={sortedData} dataConfig={updatedDataConfig}/>;
}

export default SortableTable;