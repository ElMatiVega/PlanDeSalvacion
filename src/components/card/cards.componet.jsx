import {  useState } from "react";
import "./cards.style.css";

const Cards = ({gallery}) => {
  let indice = Math.floor(Math.random(gallery.length) * gallery.length); 
 
  const [currentVerse, setCurrentVerse]= useState(indice);
   console.log(currentVerse);


  let nextVerse = () => {
    currentVerse + 1 === gallery.length 
    ? setCurrentVerse(0)
    : setCurrentVerse(currentVerse + 1)
  }



  return(
   
        <>
          <section id="quote-box">
          <div>
            <h3>{gallery[currentVerse].title}</h3>
            <p id="text">{gallery[currentVerse].text}</p>
          </div>

          <div>
            <p id="author">{gallery[currentVerse].verse}</p>
            <p id="author">{gallery[currentVerse].author}</p>
          </div>

          <div>
            <a
              href="https://twitter.com/intent/tweet"
              id="tweet-quote"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="../../images/twitter (1).png" alt="logo twitter" />
            </a>

            <button id="new-quote" onClick={nextVerse}>Proximo versículo</button>
          </div>
        </section>
      
      
      <section className="footer">
        
        <a
          href="https://www.linkedin.com/in/mat%C3%ADas-vega-dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Con ❤ MV
        </a>
      </section>
    </>
     
  )
      
  
};

export default Cards;
