import { useNavigate } from "react-router-dom";
import "../style/homeCategories.css"

function Categories() {
     const navigate = useNavigate()
     const category = ["smartphones","laptops","fragrances", "skincare", "groceries", "home-decoration" ]

  return (

    <section className="containerCategories">
      <div>
        <i className="fi fi-ts-mobile-notch"></i>
        <p href="" onClick={()=> navigate(`/category/${category[0]}`)}>CELULARES</p>
      </div>
      <div>
        <i className="fi fi-ts-laptop-code"></i>
        <p href="" onClick={()=> navigate(`/category/${category[1]}`)}>LAPTOPS</p>
      </div>
      <div>
        <i className="fi fi-tr-air-freshener"></i>
        <p href="" onClick={()=> navigate(`/category/${category[2]}`)}>FRAGANCIAS</p>
      </div>
      <div>
        <i className="fi fi-rs-cream"></i>
        <p href="" onClick={()=> navigate(`/category/${category[3]}`)}>CUIDADO DE LA PIEL</p>
      </div>
      <div>
        <i className="fi fi-ts-mug-hot-alt"></i>
        <p href="" onClick={()=> navigate(`/category/${category[4]}`)}>COMESTIBLES</p>
      </div>
      <div>
        <i className="fi fi-tr-home-heart"></i>
        <p href="" onClick={()=> navigate(`/category/${category[5]}`)}>DECORACIÓN PARA EL HOGAR</p>
      </div>
    </section>
  );
}

export default Categories;