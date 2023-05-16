import React, { useState } from 'react'

const Accordian = ({accordianData}) => {
 
  const [accordiaid, setaccordiaid] = useState([])

 const handler=(id)=>{
 setaccordiaid([id])
 }

  return (
    <>
    {accordianData && accordianData.map(({id,desc,title})=>(
      <div className="accordian" key={id}>
        <div className="accordian-title" onClick={()=>handler(id)}> 
          <button>{title}</button>
         </div>
        
        {accordiaid?.map((acc_id,index)=>(
             acc_id===id&&((
              <div className="accordian-des">
              <h3>{desc}</h3>
            </div>
             ))
        ))

        }
          
        
        </div>
    ))}
   </> 
  )
};

export default Accordian