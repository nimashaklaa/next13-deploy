import Container from "@/app/components/Container";
import {CartClient} from "@/app/cart/CartClient";

const Cart =()=>{
    return <div className="pt-8">
        <Container>
            <CartClient/>
        </Container>
    </div>
}
export default Cart;
