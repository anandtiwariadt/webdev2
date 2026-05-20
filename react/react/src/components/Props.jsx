import React from 'react'

 function Props(props) {
  return (
   <>
    <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
    <div>
    <h1>{props.name}</h1>
   <h2>{props.rollno}</h2>
   <h3>{props.course}</h3>
    </div>
     <div>
    <h1>{props.name}</h1>
   <h2>{props.rollno}</h2>
   <h3>{props.course}</h3>
    </div>
    <div>
    <h1>{props.name}</h1>
   <h2>{props.rollno}</h2>
   <h3>{props.course}</h3>
    </div>
   </div>
   </>
  )
}
export default Props
