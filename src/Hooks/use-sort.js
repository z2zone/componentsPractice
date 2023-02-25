import { useState } from "react";

const useSort = (data, dataConfig) => {
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

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

    return {
        handleClick,
        sortedData,
        sortBy,
        sortOrder
    };
}

export default useSort;