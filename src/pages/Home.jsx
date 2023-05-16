import { useEffect, useState } from "react";
import { getProducts } from "../fetching/fetching.jsx";
import Header from "../components/Header";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Searching from "../components/Searching.jsx";
import Categories from "../components/Categories.jsx";
import "../style/home.css"

function Home() {
  //mostrar productos
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

//busqueda
  const [search, setSearch] = useState("");

  const searcher = (value) => {
    setSearch(value);
    console.log(value);
  };

  const results = !search
    ? products
    : products.filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
      );

  return (
    <>
      <Header />

      <main>
        <Categories></Categories>

        <section className="padreProductos">
          <Searching onSearch={searcher}></Searching>
          <div className="containerProducts">
            {products == null
              ? "Loading..."
              : results.map((product) => {
                  //console.log(product);
                  return <CardProduct key={product.id} producto={product} />;
                })
                }
            {/* { products != null && products.length == 0 ? <p>No encontramos nada relacionado a su búsqueda</p> : ""} */}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;