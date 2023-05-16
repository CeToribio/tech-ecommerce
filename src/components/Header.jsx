import { useNavigate } from "react-router-dom";
import "../style/header.css"

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <section className="logo">
        <h1 onClick={() => navigate("/")}>Paulette</h1>
      </section>
    </header>
  );
}

export default Header;