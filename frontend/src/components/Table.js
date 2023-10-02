import './Table.css'

const Table = ({ events, deleteEvent, ...rest }) => {
    return (
        <table {...rest}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Imie i Nazwisko</th>
                    <th>Wydarzenie</th>
                    <th>Miasto</th>
                    <th>Akcje</th>
                </tr>
            </thead>
            <tbody>
                {events.map((row, index) => {
                    return (
                        <tr key={row._id}>
                            <td>{index}</td>
                            <td>{row.name}</td>
                            <td eventkey={row.event.val}>{row.event.val}</td>
                            <td citykey={row.city.val}>{row.event.val}</td>
                            <td><button onClick={() => { deleteEvent(row._id) }} className='delete'>Usun</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table