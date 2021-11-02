import React, { useState, useCallback } from "react";

const Table = ({ columns, data, id, className, style }) => {
  const filterTable = useCallback(({ target: { value } }, field) => {
    if (value) {
      const filterValue = value.toLowerCase();
      const filtereData = tableData.filter(row => {
        if (!row[field])
          return false;

        return row[field].toLowerCase().indexOf(filterValue) !== -1 ? true : false
      });
      setTableData(filtereData);
    }
    else
      setTableData(tableData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [tableData, setTableData] = useState(Array.isArray(data) ? data : []);

  return (
    <div id={id} className={"basic-table-section " + className} style={style}>
      <table>
        {
          columns
            ?
            <thead>
              <tr>
                {columns.map(({ name, field, className, style }) => (
                  <th key={field} className={className} style={style}>
                    {name}
                  </th>
                ))}
              </tr>
              <tr>
                {columns.map(({ filter, field, filterClassName, filterStyle }) => (
                  <th key={field} className={filterClassName} style={filterStyle}>
                    {filter ?
                      <input type="textbox" onChange={(e) => filterTable(e, field)} />
                      : null}
                  </th>
                ))}
              </tr>
            </thead>
            :
            null
        }
        <tbody>
          {
            tableData.map((row, index) => {
              return (
                <tr key={index}>
                  {columns.map(({ field }) => {
                    return (
                      <td key={field}>
                        {row[field]}
                      </td>
                    )
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};

Table.defaultProps = {
  columns: [],
  id: null,
  className: "",
  style: {},
  data: []
};

export default Table;
