import Table from './Table';

const SortableTable = (props) => {
    const { dataConfig } = props;

    const updatedDataConfig = dataConfig.map((columnObject)=>{
        if(columnObject.sortValue){
            return {
                ...columnObject,
                header: () => <th>{columnObject.label} sortable</th>
            };
        }else{
            return;
        }
    });

    return <Table {...props} dataConfig={updatedDataConfig}/>;
}

export default SortableTable;