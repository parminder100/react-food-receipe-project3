import { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState } from "react";
import "../SimilarRecipe/SimilarRecipe.css";
import Skeleton from "react-loading-skeleton";

const SimilarRecipe = ({recipeId}) =>{
    const [similarRecipe, setSimilarRecipe] = useState(null)
    const [showLoader, setShowLoader] = useState(true);

    const getSimilarRecipe = async(recipeId) =>{
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/similar?apiKey=3997f9c843b649139c15926663d1eb84`);
        const data = await response.json();
        localStorage.setItem("similarRecipe", JSON.stringify(data));
        setSimilarRecipe(data);
        console.log(data);
    }
    useEffect(()=>{
        let check = localStorage.getItem("similarRecipe");
        if(check){
            setSimilarRecipe(JSON.parse(check))
        }
        else{
        getSimilarRecipe(recipeId);
        }
    },[recipeId])

    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false)
        })
    })
    return(
        <>
            <div className="container">
                {similarRecipe === null ? (
                    <div>Loading</div>
                ):(
                    <>
                        <h2 className="mb-3">Similar Recipes</h2>
                        <OwlCarousel className="owl-theme" loop margin={10}>
                            {
                                similarRecipe.map((e)=>(
                                    <div>
                                        <img src={"https://restaurantden.com/wp-content/uploads/2017/09/free-stock-food-photography-websites.jpg"} alt="" />
                                        {showLoader ? (
                                            <Skeleton width={365} height={21} />
                                            ):(
                                            <p className="similar-recipe-title">{e.title}</p>
                                        )}
                                    </div>
                                ))
                            }
                        </OwlCarousel>
                    </>
                )}
            </div>
        </>
    )
}
export default SimilarRecipe;