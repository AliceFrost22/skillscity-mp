import SearchPage from "./search-bar";
import FilmPage from "@/pages/single-film-page";
import Link from "next/link";

export default function NavigationBar({}){
    return (
     <div id='navigation' className="w-full">
        <nav className="w-full bg-black m-0">
            <div >
                 <a href="/"><img src="/assets/alice logo.svg" className="flex justify-items-start h-24"/></a>
            </div>
                <div className="w-full flex flex-col-3 hover:flex-grow">
                    <div className="text-lg lg:flex-grow">
                        <a href='/library' className="font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white mr-4">
                Film Library
                             </a>
            <a href="/film-page" className="text-ml font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white mr-4">
                Reviews
            </a>
            <a href="/contact." className="text-lg font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white">
                Contact
            </a>
             </div>
        </div>
        <div className="w-full pb-1">
            <SearchPage></SearchPage>
        </div>
      </nav>
    </div>

    )
}