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
        if(sortBy && (label !== sortBy)){
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

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

    const getIcons = (label, sortBy, sortOrder) => {
        if(label !== sortBy){
            return 'both';
        }else if(sortOrder === null){
            return 'both';
        }else if(sortOrder === 'asc') {
            return 'up';
        }else if(sortOrder === 'desc') {
            return 'down';
        }
    }

    const updatedDataConfig = dataConfig.map((columnObject)=>{
        if(columnObject.sortValue){
            return {
                ...columnObject,
                header: () => ( 
                    <th className="cursor-pointer hover:bg-blue-500" onClick={()=>{handleClick(columnObject.label)}}>
                        {columnObject.label}
                        {getIcons(columnObject.label, sortBy, sortOrder)}
                    </th> 
                )
            };
        }else{
            return columnObject;
        }
    });

    return <Table {...props} data={sortedData} dataConfig={updatedDataConfig}/>;
}

export default SortableTable;