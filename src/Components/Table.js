import {Fragment} from 'react';

const Table = ({data, dataConfig}) => {

    const renderThead = dataConfig.map(obj => {
        if (obj.header) {
            return <Fragment key={obj.label}>{obj.header()}</Fragment>
        }else{
            return <th key={obj.label}>{obj.label}</th>;
        }
    });

    const renderTbody = data.map((rowData)=>{
        const renderTrow = dataConfig.map((columnData)=>{
            return <td key={columnData.label} className="p-3">{columnData.render(rowData)}</td>;
        });

        return <tr key={rowData.name} className="border-b">{renderTrow}</tr>
    });

    return(
        <table>
            <thead>
                {renderThead}
            </thead>
            <tbody>
                {renderTbody}
            </tbody>
        </table>
    );
}

export default Table;