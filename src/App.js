import './App.css';
import Headers from './Headers';
import Content from './Content';
import {useEffect,useState} from 'react'
function App() {
  const[reqType,setReqType]=useState("users");
  const[data,setData]=useState([]);
useEffect(() => {

  const API_URL="https://jsonplaceholder.typicode.com"
  const fetchData= async()=>{
    const response= await fetch(`${API_URL}/${reqType}`)
    const dat=await response.json()
    setData(dat)
  }
  fetchData();
}, [reqType])




  return (
    <div className="App">
      <Headers setReqType={setReqType}/>
      <Content data={data}/>
    </div>
  );
}

export default App;
