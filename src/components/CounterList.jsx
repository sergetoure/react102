
import CounterListItem from "./CounterListItem"
import { useGlobalStateContext } from "../provider/GlobalStateProvider";


export default function CounterList(){
    const {globalState}=useGlobalStateContext()
    const {counterList}=globalState

    //const [counterList,setCounterList]=useState(["Baked Beans","Baked Sweet Potatoes","Baked Potatoes","Texas grill","Mango bellogrini"])
 
    const itemStyle={padding:"10px",margin:"10px",width:"200px",border:"1px solid #646cff ",borderRadius:"4px"}

//    const handleClick=(e)=>{
//      setCounterList([...counterList, "Serge Toure Meal"])
        

//     }
    return (
        <>
        {counterList.map((item,index)=><CounterListItem key={index} style={itemStyle} item={item}/>)}
        <button onClick={()=>alert("hello")}>Add meal</button>
      
        </>
    )
}
