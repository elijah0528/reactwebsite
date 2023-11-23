import "./Navbar.css";
import "../../assets/react.svg";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="name">
                Elijah Kurien
            </div>
            <div className="links">
                <p><a href = "#hero"> Home </a></p>
                <p><a href = "#hero"> Elijah </a></p>
                <p><a href = "#hero"> Section </a></p>
            </div>
        </div>
    )
}

export default Navbar