import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SearchedCard from "./SearchedCard";
import Loader from "../Skeleton/Loader";

const Searched = () =>{
    const { search: searchQuery } = useParams();
    const [searchedRecipe, setSearchedRecipe] = useState(null);
    const [showLoader, setShowLoader] = useState(true);

    const getSearched = async(name) =>{
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=3997f9c843b649139c15926663d1eb84&query=${name}`);
            const recipes = await data.json();
            localStorage.setItem("searchedRecipe", JSON.stringify(recipes.results));
            setSearchedRecipe(recipes.results)
            console.log(recipes.results);
    }
    useEffect(()=>{
        const checkKey = "searchedRecipe"
        const checkData = localStorage.getItem(checkKey);
        if(checkData && searchQuery){
            setSearchedRecipe(JSON.parse(checkData));
        }
        else{
            getSearched(searchQuery);
        }
    },[searchQuery])

    useEffect(() => {
        if (searchedRecipe !== null) {
            localStorage.setItem("searchedRecipe", JSON.stringify(searchedRecipe));
        }
    }, [searchedRecipe]);

    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false);
        },3000)
    })

    const renderLoader = () =>{
        return(
            <OwlCarousel className="owl-theme" loop margin={10}>
                {
                    [...Array(3)].map((index)=>{
                        <Loader key={index} />
                    })
                }
            </OwlCarousel>
        )
    }
    return(
        <>
            <div style={{marginTop:"80px"}} className="container">
                {searchedRecipe === null && showLoader ? (
                    <p>{renderLoader()}</p>
                ):(
                <OwlCarousel className="owl-theme" loop margin={10}>
                    {
                        searchedRecipe.map((e)=>(
                            <>
                                <Link to={"/recipe/" + e.id}>
                                    <SearchedCard key={e.id}
                                        image = {e.image}
                                        title = {e.title}
                                    />
                                </Link>
                            </>
                        ))
                    }
                </OwlCarousel>
                )}
            </div>
        </>
    )
}
export default Searched;