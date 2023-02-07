import NavigationBar from "../components/home/navigation-bar";
import Hero from "../components/home/header";
import FilmGrid from "../components/home/film-grid"

export function Home() {
  return (
  <div>

    <NavigationBar></NavigationBar>

    <Hero></Hero>
    
    <FilmGrid></FilmGrid>


  </div>
  )
}

export default Home