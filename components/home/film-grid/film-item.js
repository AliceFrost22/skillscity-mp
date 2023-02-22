import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";


export default function FilmItem({ film }){
  const [likes, setLikes] = useState(+film.likes);

  const handleLike = async()=>{
    let newLikes =likes +1;
    setLikes(newLikes);

    const id = +film.id;
    const response= await fetch(`/api/increment-likes?id=${id}&likes=${newLikes}`);
    const data = await response.json();
  }

  return(
    <div id="film1" className="w-full p-4" >
      <div className="bg-amber-400 md:gap-5 border border-black rounded-lg">
      <p className="p-4 m-2 md:p10 flex justify-center rounded-lg" >
        <img src={film.img_url}/>
        </p>
      </div>
        <div className="bg-amber-400 md:gap-5 rounded-lg">
         <p className="p-4 m-2 mb-2 md:p10 flex justify-center rounded-lg text-xl" >
            {film.title}
          </p>
          <p className="font-medium" >
            {film.director}
          </p>
        <button onClick={(handleLike)}
          className="bg-red-700 px-2 py-1 rounded text-white text-center">
            Like {likes}
        </button>
          <CopyToClipboard text={film.linkToPurchase}>
            <button
              className="bg-red-900 px-4 rounded-lg text-center"
              type="button" >
                Where to watch
            </button>
          </CopyToClipboard>
      </div>
   </div> 
  )
}