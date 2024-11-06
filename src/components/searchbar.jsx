import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("")
    const navigate = useNavigate()

    const handleSearch = (e) => {
        e.preventDefault()
        if(searchInput.trim()){
            navigate(`/find/${searchInput}`)
        }
    }

    return (
        <>
            <div className="flex align-middle text-black bg-white rounded-sm font-gae">
                <form>
                <input placeholder="Type to search"
                    className="bg-transparent border-none ml-2 outline-none"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                    className="mr-2 my-1 hover:bg-blue-500 rounded-sm px-2"
                    onClick={handleSearch}
                >
                    Search
                </button>
                </form>
            </div>
        </>
    )
}

export default SearchBar
