import { useState } from "react"
import {useGlobalStateContext} from "../provider/GlobalStateProvider"

export default function Capitale(){
    const {globalState}=useGlobalStateContext()
    const {capitale}=globalState
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