import "bootstrap/dist/css/bootstrap.min.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Veggies/Veggies.css";
import { useEffect, useState } from "react";
import VeggiesCard from "./VeggiesCard";
import { Link } from "react-router-dom";
import Slider from "../Slider/Slider";
import Loader from "../Skeleton/Loader";

const Veggies = () => {
  const [Vegetable, setVegetable] = useState(null);
  const [showLoader, setShowLoader] = useState(true);

  const getVeggie = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=3997f9c843b649139c15926663d1eb84&number=9&tags=vegetarian"
    );
    const data = await response.json();
    localStorage.setItem("veggie", JSON.stringify(data.recipes));
    setVegetable(data.recipes);
  };
  useEffect(() => {
    const checkKey = "veggie";
    const checkData = localStorage.getItem(checkKey);
    if (checkData) {
      setVegetable(JSON.parse(checkData));
    } else {
      getVeggie();
    }
  }, []);

  useEffect(()=>{
    setTimeout(()=>{
      setShowLoader(false);
    }, 3000);
  },[]);

  const renderLoader = () => {
    return (
      <OwlCarousel className="owl-theme" loop margin={10}>
        {[...Array(3)].map((_, index) => (
          <Loader key={index} />
        ))}
      </OwlCarousel>
    );
  };

  return (
    <>
      <Slider />
      <div className="container">
        <h1 className="veggies-heading">Popular Veggies</h1>
        {Vegetable === null && showLoader ? (
          renderLoader()
        ) : (
          <OwlCarousel className="owl-theme" loop margin={10}>
            {Vegetable.map((e) => (
              <>
                <Link to={"/recipe/" + e.id}>
                  <VeggiesCard key={e.id} image={e.image} title={e.title} />
                </Link>
              </>
            ))}
          </OwlCarousel>
        )}
      </div>
    </>
  );
};
export default Veggies;
