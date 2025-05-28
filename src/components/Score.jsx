import { useGlobalStateContext } from "../provider/GlobalStateProvider";

function Score(){
    const {globalState}=useGlobalStateContext()
    const {score,counterList}=globalState
    return <>
     <h2>{score}</h2>
     <p>{counterList.length}</p>
    </>
}

export default Score