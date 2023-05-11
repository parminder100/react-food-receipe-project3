const VeggiesCard = (props) =>{
    return(
        <>  <div>
                <img src={props.image} alt="" />
                <p className="text-center">{props.title}</p>
            </div>
        </>
    )
}
export default VeggiesCard;