import Capitale from "./Capitale"
import { useGlobalStateContext } from "../provider/GlobalStateProvider";

function Country(){
    const {globalState}=useGlobalStateContext()
    const {country}=globalState
    return <>
     <h2>{country}</h2>
     <Capitale />
    </>
}

export default Country