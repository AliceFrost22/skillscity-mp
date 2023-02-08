import { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard";


export default function FilmItem({ film }){
  const [likes, setLikes] =useState(0);

  const handleLike =()=>{
    let newLikes =likes +1;
    setLikes(newLikes);
  }

  return(
    <div id="film1" className="bg-amber-400 gap-5 ml-20 border border-black rounded-lg ">
      <p className="mb-5 p-10 flex justify-center rounded-lg" >
        <img src={film.imgUrl}/>
        </p>
      <p className="mb-5 ml-10 text-center font-medium max-w-6xl mx-auto">
        {film.title}
      </p>
      <p className="mb-5 ml-10 text-center font-medium" >
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
  )
}