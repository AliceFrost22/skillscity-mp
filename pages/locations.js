import Hero from "@/components/home/header";
import LocationsGrid from "@/components/home/locations/location-grid";
import Content from "@/components/shared/content";
import Header from "@/components/shared/header";
import MainNav from "@/components/home/navigation-bar/nav-bar-home";

export default function LocationsPage() {
    return (
        <div>
            <MainNav></MainNav>
            <Hero>Locations</Hero>
            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <LocationsGrid/>
                </div>
            </Content>

        </div>
    );
}