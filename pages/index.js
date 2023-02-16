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
        <Banner >            
          {/* <div class="bg-repeat-x" img src="https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        </div> */}
        </Banner>
        <Topics></Topics>

        </Content>
  </div>
  )
}

export default Home