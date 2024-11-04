import Navbar from "../components/navbar"

const About = () => {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col text-gray-100">
            <Navbar />
            <div className="flex flex-col items-center justify-center py-10 px-6
                            font-gae">
                <h1 className="text-3xl font-bold mb-4">
                    About Local Event Finder
                </h1>
                <p className="font-semibold text-lg max-w-2xl text-center leading-relaxed">
                    Local Event Finder is your go-to platform for discovering events in your area. Whether you're looking for live music, local markets, art shows, or community meet-ups, we've got you covered! Our app connects you with the vibrant and diverse events happening around you, making it easier to support local venues, explore new interests, and meet like-minded people.
                </p>
                <p className="font-semibold text-lg max-w-2xl text-center leading-relaxed mt-4">
                    Built with a passion for community and connection, Local Event Finder brings people together by showcasing events organized by locals, for locals. Dive in, explore, and find your next memorable experience right around the corner!
                </p>
            </div>
        </div>
    )
}

export default About;

