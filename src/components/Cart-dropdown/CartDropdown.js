import Button from "../button/Button";
import './CartDropdown.styles.scss'

const CartDropdown = () =>{
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items"></div>
            <Button>Go To Checkout</Button>
        </div>
    )
}

export default CartDropdown;