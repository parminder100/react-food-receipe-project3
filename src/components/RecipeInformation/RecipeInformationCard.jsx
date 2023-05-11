const RecipeInformationCard = (props) =>{
    return(
        <>
            <img src={props.image} alt="" />
            <p>{props.summary}</p>
        </>
    )
}
export default RecipeInformationCard