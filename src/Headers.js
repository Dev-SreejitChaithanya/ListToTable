const Headers = ({setReqType}) => {


  return (
    
    <div className="buttonLine">
      <button onClick={()=>{setReqType("users")}}>users</button>
      <button onClick={()=>{setReqType("posts")}}>posts</button>
      <button onClick={()=>{setReqType("comments")}}>comment</button>
    </div>
  )
}

export default Headers
