export default function FilmItem({ title, director}){
  
  return(
    <div id="film1" className="bg-amber-400 gap-3 w-300 border border-black">
      <p className="mb-5 ml-10 text-center font-medium">
        {title}
      </p>
      <p className="mb-5 ml-10 text-center font-medium" >
        {director}
      </p>
    </div>
  );
}