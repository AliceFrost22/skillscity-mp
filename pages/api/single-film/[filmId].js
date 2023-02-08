import { useRouter } from "next/router";
import { useState } from "react";


export default function SingleFilm(){
    const router=useRouter();
    // const filmId =router.query.filmId; BELOW IS DESTRUCTURED

    const [film, setFilm] = useState(null);
    const{filmId} =router.query;

    useEffect(()=> {
        //if filmId is null
        if (!filmId) return; 
       getFilms(filmId);    
    },[filmId]);

    
    const getFilms = async(id) => {
        const response = await fetch(`/api/film-by-id?id=${id}`)
        const data = await response.json();
        const {film} =data;
        setFilm(data);
      }

      console.log(film);

//loading state

        if (!film) {
            return (
                <div> <img src="public/assets/Loading-spinner.gif"/> Loading....</div>
            )
        }

    return(
        <div className="w-full">
            <Header name={film.title}></Header>

            <Hero
            imgUrl={film.imgUrl}
            title={film.title}
            director={film.director} />


        </div>
    )
}