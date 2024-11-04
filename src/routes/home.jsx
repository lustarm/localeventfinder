import { Link } from "react-router-dom"
import Navbar from "../components/navbar"
import "../index.css"

import Carpenter from "../assets/carpenter.jpg"
import Coffee from "../assets/coffee.jpg"
import FVStore from "../assets/fruit-veg-store.jpg"

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-800 flex flex-col text-white">
            <Navbar />
            <div className="flex flex-row items-center justify-center py-10">
                <h1 className="text-3xl font-gae font-bold text-white">
                    Welcome to Local Event Finder
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 font-gae">
                <div className="bg-cover bg-center h-64 rounded-lg" style={{ backgroundImage: `url(${Carpenter})` }}>
                    <div className="flex items-center justify-center h-full bg-black/50 rounded-lg">
                        <h2 className="text-white text-xl font-semibold">From Carpentry Workshops</h2>
                    </div>
                </div>
                <div className="bg-cover bg-center h-64 rounded-lg" style={{ backgroundImage: `url(${Coffee})` }}>
                    <div className="flex items-center justify-center h-full bg-black/50 rounded-lg">
                        <h2 className="text-white text-xl font-semibold">to Coffee Tastings</h2>
                    </div>
                </div>
                <div className="bg-cover bg-center h-64 rounded-lg" style={{ backgroundImage: `url(${FVStore})` }}>
                    <div className="flex items-center justify-center h-full bg-black/50 rounded-lg">
                        <h2 className="text-white text-xl font-semibold"> and even Farmers' Markets</h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center font-gae text-2xl font-bold">
                <p>
                    Were always trying to find and promote small business' as such as yours!
                </p>
                <p>
                    If you would like to add your store please contact us at placeholder@place.holder
                </p>
            </div>
            <div className="font-gae font-semibold flex justify-center py-10 items-center">
                <ul className="flex space-x-6">
                    <li>
                        <Link
                            to="/"
                            className="w-20 h-20 flex items-center justify-center
                            bg-blue-500 hover:bg-blue-600 text-white font-semibold
                            rounded-full transition duration-200"
                        >
                            T
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="w-20 h-20 flex items-center justify-center
                            bg-blue-500 hover:bg-blue-600 text-white font-semibold
                            rounded-full transition duration-200"
                        >
                            T
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="w-20 h-20 flex items-center justify-center
                            bg-blue-500 hover:bg-blue-600 text-white font-semibold
                            rounded-full transition duration-200"
                        >
                            T
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Home
