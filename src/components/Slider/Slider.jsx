import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../../Assets/img/banner1.jpg";
import banner2 from "../../Assets/img/banner2.jpg";
import "../Slider/Slider.css";

const Slider = () =>{
    return(
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="banner1"
                    />
                    <Carousel.Caption>
                    <h1>no matter how you cook, Thatix has many the recipes</h1>
                    <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="banner2"
                    />

                    <Carousel.Caption>
                    <h1>Submit Recipes</h1>
                    <h3>Easily share your own recipe on our website.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default Slider; 