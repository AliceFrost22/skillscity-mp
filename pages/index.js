import NavigationBar from "../components/home/navigation-bar";
import Topics from "@/components/home/topics";
import Banner from "@/components/home/header/banner";
import Content from "@/components/shared/content";
import MainNav from "@/components/home/navigation-bar/nav-bar-home";
import Header from "@/components/shared/header";
import Bio from "@/components/home/content";
import Contact from "@/components/home/content/contact";

// import checkMobileScreen from "../components/home/functions";

export function Home() {

  return (
  <div>
       <MainNav></MainNav>

        <Header/>            
        <Bio></Bio>
        
        <Topics></Topics>
        <Contact></Contact>
  </div>
  )
}

export default Home