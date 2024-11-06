import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const Category = () => {
    const { category } = useParams();

    // Sample mock events with categories
    const mockEvents = [
        { id: 1, name: "Art Festival", date: "2024-11-10", location: "Downtown Park", category: "art" },
        { id: 2, name: "Music Night", date: "2024-11-12", location: "City Concert Hall", category: "music" },
        { id: 3, name: "Food Market", date: "2024-11-15", location: "Central Plaza", category: "food" },
        { id: 4, name: "Local Art Show", date: "2024-11-18", location: "Art Gallery", category: "art" },
        { id: 5, name: "Jazz Concert", date: "2024-11-20", location: "Jazz Club", category: "music" },
        // Add more events as needed
    ];

    // Filter events based on the URL category
    const filteredEvents = mockEvents.filter(event => event.category === category.toLowerCase());

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white">
                {/* Hero Section */}
                <div className="bg-blue-700 text-center py-10">
                    <h1 className="text-4xl font-bold capitalize">Explore {category} Events</h1>
                    <p className="text-lg mt-2">Discover events that match your interests in {category}</p>
                </div>

                {/* Event Cards */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map(event => (
                            <div key={event.id} className="bg-gray-800 rounded shadow-lg p-6 hover:scale-105 transform transition duration-300">
                                <div className="flex justify-center">
                                    <p>test</p>
                                </div>

                                <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                                <p className="text-gray-400">{event.date}</p>
                                <p className="mt-1">{event.location}</p>
                                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                    View Details
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 text-lg col-span-full">
                            No events found for this category.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Category;

