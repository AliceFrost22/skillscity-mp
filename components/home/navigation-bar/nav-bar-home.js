import BurgerIcon from "./burger";


export default function MainNav(){
    return(
        <div id="logo" className="w-full grid grid-cols-2">
            <div className="relative w-24 m-3 rounded-md">
                <a href="/"><img src="/assets/alice-logo-2.png"/></a>
            </div>
            <div className="grid justify-right">
                <BurgerIcon color="black" className="w-6 h-6"/>
            </div>
        </div>
    )
}

