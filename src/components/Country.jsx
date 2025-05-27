import Capitale from "./Capitale"

function Country({country,capitale,children}){
    return <>
     <h2>{country}</h2>
     <Capitale capitale={capitale} />
    </>
}

export default Country