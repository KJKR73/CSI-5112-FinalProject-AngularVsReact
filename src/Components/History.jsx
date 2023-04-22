import React from 'react'
import { useTable } from 'react-table'

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()} className="divide-y divide-gray-200 w-full mt-4 bg-blue-100">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th className={`pt-3 pb-4 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider relative border-y-2 border-blue-200`} {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200 ">
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell, index) => {
                                if (index === 0 || cell.value === "Not Shared") {
                                    return <td className={`py-3 text-center text-xs text-gray-500 font-medium`} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                } else
                                    return <td className={`py-3 text-center text-xs text-gray-500 underline cursor-pointer`} {...cell.getCellProps()}><a href={"https://" + String(cell.value)} target="_blank">{cell.render('Cell')}</a> </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function History({ show, userData }) {
    const columns = React.useMemo(
        () => [

            {

                Header: 'Friend Name',

                accessor: 'Friend_Name', // accessor is the "key" in the data

            },
            {

                Header: 'Facebook',

                accessor: 'Facebook_ID',

            },
            {

                Header: 'Instagram',

                accessor: 'Instagram_ID',

            },
            {

                Header: 'Github',

                accessor: 'Github_ID',

                // Filter: SelectColumnFilter,
                // filter: 'includes',
                // pass filters individual this way but instead we have chosen a default filter (which is mandatory) and set it visible on the basis of column name 
            },
            {

                Header: 'Linkedin',

                accessor: 'Linkedin_ID',

            },
        ],

        []
    )

    let friendDataObj = [];

    if (userData.connections) {

        userData.connections.forEach(element => {
            let tempObj = {};
            let platforms = element.connectPlatforms[0]
            tempObj["Friend_Name"] = element.userName;
            tempObj["Facebook_ID"] = platforms.facebook ? platforms["facebook"] : "Not Shared";
            tempObj["Instagram_ID"] = platforms.instagram ? platforms["instagram"] : "Not Shared";
            tempObj["Linkedin_ID"] = platforms.linkedin ? platforms["Linkedin_ID"] : "Not Shared";
            tempObj["Github_ID"] = platforms.github ? platforms["github"] : "Not Shared";

            friendDataObj.push(tempObj)
        });
        console.log(friendDataObj)

    }



    const data = React.useMemo(() => friendDataObj, [friendDataObj])

    return (
        <Table columns={columns} data={data} />
    )
}


export default History
