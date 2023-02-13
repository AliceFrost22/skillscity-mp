import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";


export default function FilmItem({ film }){
  const [likes, setLikes] =useState(0);

  const handleLike = async()=>{
    let newLikes =likes +1;
    const id =film.id;
    const response= await fetch(`/api/increment-likes?id=${id}&likes=${newLikes}`);
    const data = await response.json();

    setLikes(newLikes);
  }

  return(
    <div id="film1" >
      <div className="bg-amber-400 gap-5 ml-20 border border-black rounded-lg">
      <p className="p-10 flex justify-center rounded-lg" >
        <img src={film.img_url}/>
        </p>
      </div>
        <div className="bg-amber-400 text-center gap-5 ml-20 mt-5 border border-black ">
          <p className="text-center font-medium max-w-6xl mx-auto px-5 pt-5 pb-10">
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
                Copy Link to Amazon
            </button>
          </CopyToClipboard>
      </div>
   </div> 
  )
}