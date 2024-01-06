import {createContext, useCallback, useContext, useEffect, useState} from "react";
import {CartProductType} from "@/app/components/products/ProductCard";
import {toast} from "react-hot-toast";


type CartContextType ={
    cartTotalAmount:number;
    cartTotalQty : number;
    cartProducts : CartProductType[] | null;
    handleClearCart:()=>void
    handleAddProductToCart: (product:CartProductType)=>void
    handleRemoveProductFromCart: (product:CartProductType)=>void
    handleCartQtyIncrease:(product:CartProductType)=>void
    handleCartQtyDecrease:(product:CartProductType)=>void
}
export const CartContext = createContext<CartContextType| null>(null);

interface Props{
    [propName:string]:any;

}
export const CartContextProvider =(props:Props)=>{
    const [cartTotalQty, setCartTotalQty] = useState(0);

    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    const [cartProducts,setCartProducts] = useState<CartProductType[] | null> (null)

    useEffect(()=>{
        const cartItems:any = localStorage.getItem("eShopCartItem")
        const cProducts: CartProductType[]|null =JSON.parse(cartItems)

        setCartProducts(cProducts)
    },[])

    useEffect(() => {
        const getTotals = () =>{

            if (cartProducts){
                const {total,qty}= cartProducts?.reduce((acc, item)=>{
                    const itemTotal = item.price*item.quantity
                    acc.total += itemTotal
                    acc.qty += item.quantity

                    return acc
                },{
                    total:0,
                    qty:0
                })
                setCartTotalQty(qty)
                setCartTotalAmount(total)
            }
        }
        getTotals()
    }, [cartProducts]);

    const handleAddProductToCart = useCallback((product:CartProductType)=>{
        setCartProducts((prev)=>{
            let updatedCart;
            if(prev){
                updatedCart = [...prev, product]
            }else{
                updatedCart= [product]
            }
            toast.success("Product Added to Cart")
            localStorage.setItem("eShopCartItem",JSON.stringify(updatedCart))
            return updatedCart
        })
    },[])

    const handleRemoveProductFromCart = useCallback((product: CartProductType)=>{
        if(cartProducts){
            const filterProducts = cartProducts.filter((item)=>{
                return !(item.id === product.id)
            })
            setCartProducts(filterProducts)
            toast.success("Product Removed from the cart")
            localStorage.setItem("eShopCartItem",JSON.stringify(filterProducts))

        }
    },[cartProducts])

    const handleCartQtyIncrease = useCallback((product:CartProductType)=>{
        let updatedCart;
        if(product.quantity === 20){
            return toast.error("Maximum Level Reached !")
        }
        if(cartProducts){
            updatedCart =[...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=>item.id ===product.id)
            if(existingIndex>-1){
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem("eShopCartItem",JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleCartQtyDecrease = useCallback((product:CartProductType)=>{
        let updatedCart;
        if(product.quantity === 1){
            return toast.error("Minimum Level Reached !")
        }
        if(cartProducts){
            updatedCart =[...cartProducts]
            const existingIndex = cartProducts.findIndex((item)=>item.id ===product.id)
            if(existingIndex>-1){
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
            }
            setCartProducts(updatedCart)
            localStorage.setItem("eShopCartItem",JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleClearCart = useCallback(()=>{
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("eShopCartItem",JSON.stringify(null))


    },[cartProducts])

    const value= {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyIncrease,
        handleCartQtyDecrease,
        handleClearCart,
        cartTotalAmount
    }

    return <CartContext.Provider value={value} {...props}/>

}

export const useCart = () =>{
    const context = useContext(CartContext);


    if (context ===null){
        throw new Error("useCart must be used within a CartContextProvider")
    }
    return context
}

