import { useNavigate } from "react-router-dom";
import "../style/homeCategories.css"

function Categories() {
     const navigate = useNavigate()
     const category = ["smartphones","laptops","fragrances", "skincare", "groceries", "home-decoration" ]

  return (

    <section className="containerCategories">
      <div onClick={()=> navigate(`/category/${category[0]}`)}>
        <i className="fi fi-ts-mobile-notch"></i>
        <p href="" >CELULARES</p>
      </div>
      <div onClick={()=> navigate(`/category/${category[1]}`)}>
        <i className="fi fi-ts-laptop-code"></i>
        <p href="" >LAPTOPS</p>
      </div>
      <div onClick={()=> navigate(`/category/${category[2]}`)}>
        <i className="fi fi-tr-air-freshener"></i>
        <p href="" >FRAGANCIAS</p>
      </div>
      <div onClick={()=> navigate(`/category/${category[3]}`)}>
        <i className="fi fi-rs-cream"></i>
        <p href="" >CUIDADO DE LA PIEL</p>
      </div>
      <div onClick={()=> navigate(`/category/${category[4]}`)}>
        <i className="fi fi-ts-mug-hot-alt"></i>
        <p href="" >COMESTIBLES</p>
      </div>
      <div onClick={()=> navigate(`/category/${category[5]}`)}>
        <i className="fi fi-tr-home-heart"></i>
        <p href="" >DECORACIÓN PARA EL HOGAR</p>
      </div>
    </section>
  );
}

export default Categories;