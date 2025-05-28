import { useGlobalStateContext } from "../provider/GlobalStateProvider";


function Cite() {

  const {globalState}=useGlobalStateContext()
  const {author,desc:description}=globalState
  return (
    <>
      <cite className="copyright">Copyright {author} 2025</cite>
      <p>{description}</p>
    </>
  );
}

export default Cite;
