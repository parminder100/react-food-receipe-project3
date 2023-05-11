import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../RecipeInformation/RecipeInformation.css";
import SimilarRecipe from "../SimilarRecipe/SimilarRecipe";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RecipeInformation = () => {
  const [recipeInformation, setRecipeInformation] = useState(null);
  const [displayInstruction, setDisplayInstruction] = useState(true);
  const [displayIngredients, setDisplayIngredients] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  let params = useParams();
  const getRecipesInformation = async (name) => {
    let checkKey = "recipeInformation";
    let checkData = localStorage.getItem(checkKey);
    if (checkData) {
      setRecipeInformation(JSON.parse(checkData));
      return;
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=3997f9c843b649139c15926663d1eb84`
      );
      const data = await response.json();
      setRecipeInformation(data);
      localStorage.setItem("recipeInformation", JSON.stringify(data));
      console.log(data);
    }
  };
  useEffect(() => {
    getRecipesInformation();
  }, [params.name]);

  const handleInstruction = () => {
    setDisplayInstruction(!displayInstruction);
  };

  const handleIngredients = () => {
    setDisplayIngredients(!displayIngredients);
  };

  useEffect(()=>{
    setTimeout(()=>{
      setShowLoader(false);
    },3000)
  })
  return (
    <>
      <div className="container">
        {recipeInformation === null ? (
          <div>Loadig</div>
        ) : (
          <>
            {showLoader ? (
                <Skeleton style={{marginTop:"90px", marginBottom:"20px"}} width={1116} height={33} />
              ):(
            <h3 className="recipe-name">{recipeInformation.title}</h3>
            )}
            <div className="recipe-details">
              {showLoader ? (
                  <Skeleton width={556} height={370} />
                ):(
              <img src={recipeInformation.image} alt="" />
                )}
              <div>
                <button className="instruction-btn" onClick={handleInstruction}>
                  Instruction
                </button>
                {showLoader ? (
                  <Skeleton width={228} height={528} />
                ):(
                  <>
                    {displayInstruction && <p>{recipeInformation.instructions}</p>}
                  </>
                )}
              </div>
              <div>
                <button className="instruction-btn" onClick={handleIngredients}>
                  Ingredients
                </button>
                <ul>
                  {showLoader ? (
                    <Skeleton width={231} height={360} />
                  ):(
                    recipeInformation.extendedIngredients.map((e) => (
                      <>
                        {displayIngredients && <li key={e.id}>{e.original}</li>}
                      </>
                    )))}
                </ul>
              </div>
            </div>
          </>
        )}
      </div>
      <SimilarRecipe recipeId={params.name} />
    </>
  );
};
export default RecipeInformation;
