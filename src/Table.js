import Row from "./Row"
const Table = ({data}) => {
  return (
    <div className="table-container">
        <table>
            <tbody>
            {data.map((item) => (

                <Row key={item.id} data={item}/>        
                    ))}
            </tbody>
        </table>
      
    </div>
  )
}

export default Table



