import Header from "../components/Header";
import Footer from "../components/Footer";
import { uniqueProduct } from "../fetching/fetching.jsx";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/product.css"

function Product() {
const navigate = useNavigate()

  const [productito, setProductito] = useState(null);
  const params = useParams();

  useEffect(() => {
    uniqueProduct(params.id, setProductito);
  }, []);


  //funcionalidad carito de compras
const [ productsSelect, setProductsSelect] = useState([])
const copyProductsSelect = [...productsSelect]

function addProduct(product){
    const find = copyProductsSelect.findIndex((p) => p.id === product.id);
    if (find === -1) {
      const newProduct = { ...product, quantity: 1, subtotal: product.price };
      setProductsSelect(copyProductsSelect.concat(newProduct));
      
    } else {
      copyProductsSelect[find].count += 1;
      copyProductsSelect[find].subtotal =
        copyProductsSelect[find].count === 1
          ? copyProductsSelect[find].cost
          : copyProductsSelect[find].count * copyProductsSelect[find].price;
      setProductsSelect(copyProductsSelect);
    }

}


  return (
    <>
      <Header />
      <section className="container-page-product">
        {productito != null ? (
          <div className="productito">
            <img src={productito.images[0]} className="imgPrincipal" />
            <h3>{productito.title}</h3>
            <p><strong className="cost">${productito.price}</strong></p>
            <p>{productito.description}</p>

            {productito.images.length >= 4 ? (
              <div className="imagesProduct">
                <img src={productito.images[1]} alt={productito.title} />
                <img src={productito.images[2]} alt={productito.title} />
                <img src={productito.images[3]} alt={productito.title} />
              </div>
            ) : null}
          </div>
        ) : (
          "Loading"
        )}
      </section>
     
      <Footer />
    </>
  );
}

export default Product;