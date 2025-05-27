function Cite({ author, desc: descritpion }) {
  return (
    <>
      <cite className="copyright">Copyright {author} 2025</cite>
      <p>{descritpion}</p>
    </>
  );
}

export default Cite;
