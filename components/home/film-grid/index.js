import FilmItem from "./film-item.js";
// import films from "./films,js";
import { useState } from "react";

// const [films, setFilms] =useState(
  const films= [
      { title: "Everything Everywhere All At Once", director: "Daniel Scheinert"},
      { title: "Everything Ence", director: "Dan nert"},
      { title: "Everything Everywher Once", director: "Danne tert"},
    ];

export default function FilmGrid(){
  return(
      <div id="film-grid" className="w-full px-20 pt-20 grid grid-cols-3 bg-black text-white ">
          {films.map((film) => {
            console.log(films);
            return (
            <FilmItem 
                title={film.title}
                director={film.director}
              />);
        })}   
      </div>
  )
}