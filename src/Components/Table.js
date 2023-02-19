const Table = ({data, dataConfig}) => {

    const renderThead = dataConfig.map(obj => {
        return <th key={obj.label}>{obj.label}</th>;
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