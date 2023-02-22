import FilmGrid from "@/components/home/film-grid";
import Hero from "@/components/home/header";
import MainNav from "@/components/home/navigation-bar/nav-bar-home";
import NavigationBar from "../components/home/navigation-bar";


export default function Library() {
  return (
    <div>
  
      <NavigationBar></NavigationBar>
  
      <Hero>Library</Hero>
      <FilmGrid></FilmGrid>
  
  
    </div>
    )
}
