import Hero from "@/components/home/header";
import LocationsGrid from "@/components/home/locations/location-grid";
import Content from "@/components/shared/content";
import Header from "@/components/shared/header";
import MainNav from "@/components/home/navigation-bar/nav-bar-home";

export default function LocationsPage() {
    return (
        <div>
            <MainNav></MainNav>
            <Hero></Hero>
            <h1 className="text-5xl text-center mb-5 font-header"> Locations</h1>
            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <LocationsGrid/>
                </div>
            </Content>

        </div>
    );
}