import LikesProvider from "@/components/context/likes";
import { useEffect, useState } from "react";
import LocationItem from "./location-item";


export default function LocationsGrid() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        const response = await fetch(`/api/locations`);
        const data = await response.json();
        setLocations(data);
    }

    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {locations.map((location, index) => (
                <LikesProvider>
                    <LocationItem key={index} location={location} />
                </LikesProvider>
            ))}
        </div>
    )
}