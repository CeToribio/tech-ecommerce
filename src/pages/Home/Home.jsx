import { useEffect, useState } from "react";
import { getProducts } from "../../fetching/fetching";

function Home() {
const [products, setProducts] = useState(null)
console.log(products)

    useEffect(()=> {
        getProducts(setProducts)
    }, [])
  return (
    <>
    { products != null ? products.map((product) => {return (product.title)} ): "Loading..."}
    </>
  );
}

export default Home;
