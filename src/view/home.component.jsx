import Cards from "../components/card/cards.componet";
import gallery from "../utils/gallery";
import  './home.styles.css'

function Home() {
  let versiculos = gallery;

 

  return (
    <>
      <Cards gallery={versiculos}   />
      
      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/mat%C3%ADas-vega-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Con 💙 MV
        </a>
      </footer>
    </>
  );
}

export default Home;
