

export default function MainNav(){
    return(
        <div id="MainNav" className="w-full">
            <div className="flex grid-cols-4 gap-2 text-right mr-6 mt-8">
                <a href="/" className="text-end text-ml font-sans hover:scale-125 block mt-4 inline-block lg:mt-0 text-black hover:text-purple-100 mr-4">
                   Home
                </a>
                <a href="/film-page" className="text-end text-ml font-sans hover:scale-125 block mt-4 inline-block lg:mt-0 text-black hover:text-purple-100 mr-4">
                   Library
                </a>
                <a href="/locations" className="text-end text-ml font-sans hover:scale-125 block mt-4 inline-block lg:mt-0 text-black hover:text-purple-100 mr-4">
                   Locations
                </a>
                <a href="/search" className="text-end text-ml font-sans hover:scale-125 block mt-4 inline-block lg:mt-0 text-black hover:text-purple-100 mr-4">
                   Search
                </a>
            </div>
        </div>

    )
}

