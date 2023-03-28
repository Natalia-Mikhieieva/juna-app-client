function ItemCard({id, image, title, brand,price}) {
   
    return(
        
        <div key={id} className="card">
            <img src={image} alt="item" />
            <h3>{title}</h3>
            <span>{brand}</span>
            <p>{price}</p>
        </div>
        
    )
}

export default ItemCard;