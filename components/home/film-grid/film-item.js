export default function FilmItem({ film }){
  
  return(
    <div id="film1" className="bg-amber-900 gap-3 w-300 border border-black">
      <p className="mb-5 ml-10 text-center font-medium">
        {film.title}
      </p>
      <p className="mb-5 ml-10 text-center font-medium" >
        {film.director}
      </p>
    </div>
  )
}