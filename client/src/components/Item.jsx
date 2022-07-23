const Item=(props)=>{
    return(
        <div className="box">
            <div>
                <img className="boxImg" src={props.img} alt={props.name}></img>
            </div>
            <div className="boxContent">
                <h2 className="cardContent">{props.name}</h2>
                <h3 className="cardContent">{props.price}</h3>
                <h4 className="cardContent">{props.productDesc}</h4>
            </div>
            <button type="button" className="buyBtn btn-grad">Buy Now</button>
        </div>
    )
}

export default Item;