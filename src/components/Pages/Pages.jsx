import { Route, Routes } from "react-router-dom";
import Searched from "../Searched/Searched";
import RecipeInformation from "../RecipeInformation/RecipeInformation";
import Veggies from "../Veggies/Veggies";
import SimilarRecipe from "../SimilarRecipe/SimilarRecipe";

const Pages = () =>{
    return(
        <>
            <Routes>
                <Route path= "/" element={<Veggies />}></Route>
                <Route path="/searched/:search" element={<Searched />}></Route>
                <Route path="/recipe/:name" element={<RecipeInformation />}></Route>
                <Route path="/recipe/:id" element={<SimilarRecipe />}></Route>
            </Routes>
        </>
    )
}
export default Pages;