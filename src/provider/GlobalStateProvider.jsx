import { createContext,useContext, useState } from "react";
import Cite from "../components/Cite"

const stateContext=createContext() // create the context
const state={
      lastName: "karaba",
      firstName: "Mainoua",
      date: "05/31/1985",
      country: "Senegal",
      capitale: "Dakar",
      author:"Amidou Bamba",
      desc:"description here",
      email:"sergetoure@gmail.com",
      score: 87,
      children: <Cite />,
      counterList:["Baked Beans","Baked Sweet Potatoes","Baked Potatoes","Texas grill","Mango bellogrini","Sucisse meal"]
    } // create the state


export default function GlobalStateProvider({children}){

    const [globalState,setGlobalState]=useState(state)


    return (
        <>
        <stateContext.Provider value={{globalState}}>
            {children}

        </stateContext.Provider>
        </>
    )

  
}

export const useGlobalStateContext=()=>useContext(stateContext)


