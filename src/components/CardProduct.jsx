import { useNavigate } from "react-router-dom";
import "../style/cardProduct.css"

function CardProduct({ producto, add }) {

  const navigate = useNavigate()

  return (
    <div className="card-product" onClick={()=> navigate(`/product/${producto.id}`)}>
      <img src={producto.images[0]} alt={producto.title} className="imagen-producto" />
      <h3 className="">{producto.title}</h3>
      <p>{producto.description}</p>
      <strong>${producto.price}</strong>
    </div>
  );
}

export default CardProduct;