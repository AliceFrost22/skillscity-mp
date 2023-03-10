import FilmItem from "./film-item.js";
import { useEffect, useState } from "react";


export default function FilmGrid(){
  const [films, setFilms] = useState([]);
  
  useEffect(()=>{
    getFilms();
  }, []);

      const getFilms = async() => {
      const response = await fetch(`/api/films`)
      const data = await response.json();
      console.log(data);
      setFilms(data);
    }

  return(
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 bg-black text-white gap-5">
          {films.map((film, index) => {
            return(
              <FilmItem key={index} film={film}/>
            )
          })}
      </div>
  )
}