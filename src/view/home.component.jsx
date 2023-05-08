import Cards from "../components/card/cards.componet";
import gallery from "../utils/gallery";

function Home() {
  let versiculos = gallery;

 

  return (
    <>
      <Cards gallery={versiculos}   />
    </>
  );
}

export default Home;
