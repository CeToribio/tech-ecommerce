import { useEffect, useState } from "react";
import { getProducts } from "../../fetching/fetching";
import Header from "../../components/Header";
import Footer from "../../components/Footer"


function Home() {
const [products, setProducts] = useState(null)
console.log(products)

    useEffect(()=> {
        getProducts(setProducts)
    }, [])
  return (
    <>
    <Header></Header>
    { products != null ? products.map((product) => {return (product.title)} ): "Loading..."}
    <Footer></Footer>
    </>
  );
}

export default Home;
