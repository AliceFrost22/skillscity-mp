import NavigationBar from "../components/home/navigation-bar";
import Hero from "../components/home/header";
import FilmGrid from "../components/home/film-grid";
import Topics from "@/components/home/topics";

// import checkMobileScreen from "../components/home/functions";

export function Home() {

  return (
  <div>
    {/* <useCheckMobileScreen></useCheckMobileScreen> */}

    <NavigationBar></NavigationBar>

    <Hero></Hero>
    {/* <Topics></Topics> */}
    <FilmGrid></FilmGrid>


  </div>
  )
}

export default Home