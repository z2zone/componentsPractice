import { useState } from 'react';
import Table from './Table';
import useSort from '../Hooks/use-sort';

const SortableTable = (props) => {
    const {dataConfig, data} = props;
    const {handleClick, sortedData, sortBy, sortOrder} = useSort(data, dataConfig); 

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