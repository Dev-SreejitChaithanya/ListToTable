import Cell from "./Cell"
const Row = ({data}) => {
  return (
    <tr>
        {Object.entries(data).map(([key,value])=>{
            return(
                <Cell key={key} cellData={JSON.stringify(value)}/>
            )
        })}
      
    </tr>
  )
}

export default Row
