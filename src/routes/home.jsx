import Navbar from "../components/navbar"
import "../index.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-row items-center justify-center py-10">
                <h1 className="text-xl font-test">
                    Welcome to Local Event Finder
                </h1>
            </div>
        </>
    )
}

export default Home
