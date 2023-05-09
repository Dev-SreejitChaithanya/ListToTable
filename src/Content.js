import Table from "./Table"
const Content = ({data}) => {
  return (
<div className="content">
{/* <ul>
      {data.map((item) => (
        <li
        key={item.id} 
        >{JSON.stringify(item)}</li>
        
      
      ))}
</ul> */}
<Table data={data}/>

</div>
  )
}

export default Content
