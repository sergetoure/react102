import { useState } from "react"

export default function Capitale({capitale}){
    const [capStyle,setCapStyle]=useState({})

    const handleCapStyle=(e)=>{
        setCapStyle(capStyle=>({...capStyle,
            
            
            color:"tomato"
        })
   ) }

    
    return <>
    <h6 style={capStyle} onClick={handleCapStyle}>{capitale}</h6>

    </>
}