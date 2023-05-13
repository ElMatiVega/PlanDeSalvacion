import { useState } from "react";
import { AiOutlineLeft  } from "react-icons/ai";
import { AiOutlineRight  } from "react-icons/ai";

import "./cards.style.css";

const Cards = ({ gallery }) => {
  //let indice = Math.floor(Math.random(gallery.length) * gallery.length);

  const [currentVerse, setCurrentVerse] = useState(0);
  

  let nextVerse = () => {
    currentVerse + 1 === gallery.length
      ? setCurrentVerse(currentVerse)
      : setCurrentVerse(currentVerse + 1);
  };

  let prevVerse = () => {
    currentVerse === 0
      ? setCurrentVerse(currentVerse)
      : setCurrentVerse(currentVerse - 1);
  };

  return (
    <>
      <div className="container">
      <div className="container__content">
        <h1>Plan de Salvación</h1>
        <section id="quote-box">
          <div>
            <h2 className="container__title">{gallery[currentVerse].title}</h2>
            <p className="container__text" id="text">
              {gallery[currentVerse].text}
            </p>
            <a href="#" className="container__link">
              <span>Contactenos</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          <div>
            <p id="author">{gallery[currentVerse].verse}</p>
            <p id="author">{gallery[currentVerse].author}</p>
          </div>

          <div className="btn">
            <button className="prevVerse" id="new-quote" onClick={prevVerse}>
              <AiOutlineLeft/>
            </button>
            <button className="nextVerse" id="new-quote" onClick={nextVerse}>
            <AiOutlineRight />
            </button>
          </div>
        </section>
      </div>
      <img src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_640.jpg" alt="img de paisaje" />
    </div>
    
    </>
  );
};

export default Cards;
