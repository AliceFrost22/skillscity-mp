import LocationsGrid from "@/components/home/locations/location-grid";
import Content from "@/components/shared/content";
import Header from "@/components/shared/header";

export default function LocationsPage() {
    return (
        <div className="w-full">
            <Header>Locations</Header>

            <Content>
                <div className="w-full max-w-6xl mx-auto mt-8">
                    <LocationsGrid />
                </div>
            </Content>

        </div>
    );
}