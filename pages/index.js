import NavigationBar from "../components/home/navigation-bar";
import Topics from "@/components/home/topics";
import Banner from "@/components/home/header/banner";
import BackgroundImage from "@/components/home/header/banner";
import Content from "@/components/shared/content";

// import checkMobileScreen from "../components/home/functions";

export function Home() {

  return (
  <div>
       <NavigationBar></NavigationBar>
       <Content>
        <Banner></Banner>
        <Topics></Topics>

        </Content>
  </div>
  )
}

export default Home