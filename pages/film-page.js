import NavigationBar from "../components/home/navigation-bar";
import Hero from "../components/home/header/film-hero";
import FilmGrid from "../components/home/film-grid";
import MainNav from "@/components/home/navigation-bar/nav-bar-home";


export function FilmPage() {

  return (
  <div>

    <NavigationBar></NavigationBar>

    <Hero>Library</Hero>
    <FilmGrid></FilmGrid>


  </div>
  )
}

export default FilmPage