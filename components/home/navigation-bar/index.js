import SearchPage from "./search-bar";
import FilmPage from "@/pages/single-film-page";
import Link from "next/link";

export default function NavigationBar({}){
    return (
     <div id='navigation' className="w-full flex flex-col-4">
        <div className="bg-black m-0 md:w-full lg:w-full font-xl">
            <a href="/"><img src="/assets/alice-logo.svg" className="flex justify-left h-24 md:h-28 lg:h-40"/></a>
        </div>
            <div className="hover:flex-grow text-left bg-black w-full pt-14">
                <div className="text-lg lg:flex-grow">
                    <a href="/" className="font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Home
                    </a>
                    <a href="/film-page" className="font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Library
                    </a>
                    <a href="/locations" className="font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Locations
                    </a>
                    <a href="/search" className="font-bold hover:scale-125 block mt-4 inline-block lg:mt-0 text-white hover:text-white mr-4">
                        Search
                    </a>
             </div>
        </div>
    </div>
  )
}