import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product() {


    return (
        <div className="products">
            <img className="img" src="https://picsum.photos/200/300" alt="Product Image" />
            <div className="product-details">
                <label className="product-name">Sample Product</label>
                <label className="product-price">$19.99</label>
                <label className="Total-Price">Total</label>
            </div>
            <QuantityPicker />
        </div>
    );
}


export default Product;