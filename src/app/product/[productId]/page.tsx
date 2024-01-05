import {products} from "@/app/utils/products";
import {product} from "@/app/utils/product";
import Container from "@/app/components/Container";
import {ProductDetails} from "@/app/product/[productId]/productDetails";

type IParams ={
    productId?:string
}

const Product = ({params}: { params:IParams }) =>{
    console.log('params', params)
    return <div className="p-8">
        <Container>
            <ProductDetails product = {product}/>
        </Container>
    </div>
}
export default Product;