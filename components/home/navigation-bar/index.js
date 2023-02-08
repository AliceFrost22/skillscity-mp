import SearchPage from "./search-bar";
import FilmPage from "@/pages/film-page";
import Link from "next/link";

export default function NavigationBar({}){
    return (
     <div id='navigation'>
        <nav className="flex items-center justify-between flex-wrap bg-black p-6 m-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" id="mainIconPathAttribute"></path> </svg>
                <span className="font-bold text-xl tracking-tigh px-5"><a href="/" >Frosts Films</a></span>
            </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-lg lg:flex-grow">
                             <a href='/film-page' className="font-bold hover:scale-125 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Top Movies
                             </a>
            <a href="/" className="text-lg font-bold hover:scale-125 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Reviews
            </a>
            <a href="/" className="text-lg font-bold hover:scale-125 block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                Blog
            </a>
             </div>
        </div>
        <div className="pr-24 w-72 mr-20">
            <SearchPage></SearchPage>
        </div>
      </nav>
    </div>

    )
}