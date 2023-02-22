import NavigationBar from "../components/home/navigation-bar";
import Hero from "../components/home/header/film-hero";
import FilmGrid from "../components/home/film-grid";


export function FilmPage() {

  return (
  <div>

    <MainNav></MainNav>

    <Hero></Hero>
    <FilmGrid></FilmGrid>


  </div>
  )
}

export default FilmPage