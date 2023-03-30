function ItemCard({ id, image, title, brand, description, price, stock }) {
  return (
    <div className="card">
      <img src={image} alt="item" />
      <h3>{title}</h3>
      <span>{brand}</span>
      <p>{description}</p>
      <p>{stock}</p>
      <p>{price}</p>
    </div>
  );
}

export default ItemCard;
