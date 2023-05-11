const SearchedCard = (props) =>{
    return(
        <>
            <div>
                <img src={props.image} alt="title" />
                <p>{props.title}</p>
            </div>
        </>
    )
}
export default SearchedCard;