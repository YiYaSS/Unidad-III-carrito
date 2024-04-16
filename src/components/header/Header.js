import Navbar from "../Navbar/Navbar"; 
import Banner from "../banner/Banner";
import Products from "../Products/Products";

const Header = () => {
    return (
        <header>
            <Navbar />
            <Banner />
            <div className="product-card-container">
                <Products />
            </div>
        </header>
    );
}

export default Header;