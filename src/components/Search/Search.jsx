import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Search/Search.css";

const Search = () =>{
    const [searchRecipe, setSearchRecipe] = useState("");
    const navigate = useNavigate();
    const handleSearch = (e) =>{
        e.preventDefault();
        navigate("/searched/" + searchRecipe);
    }
    return(
        <>
            <form onSubmit={handleSearch}>
                <input className="search-recipe-input" value={searchRecipe} onChange={(e)=>setSearchRecipe(e.target.value)} type="text" placeholder="Enter Recipe" />
            </form>
        </>
    )
}
export default Search;