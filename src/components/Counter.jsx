import { useGlobalStateContext } from "../provider/GlobalStateProvider";
export default function Counter (){
    const {globalState}=useGlobalStateContext()
    const {counterList}=globalState


    return (
        <>
        <h3>Number of item today is:{counterList.length}</h3>
        </>
    )
}