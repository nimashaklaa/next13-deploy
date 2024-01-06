"use client";

import Image from "next/image";

import {FormatPrice} from "@/app/utils/formatPrice";
import {TruncateText} from "@/app/utils/TruncateText";
import {useCallback, useEffect, useState} from "react";
import {SetQuantity} from "@/app/components/products/SetQuantity";
import {Button} from "@/app/components/Button";
import {useCart} from "@/app/hooks/useCart";
import {MdCheckCircle} from "react-icons/md";
import {useRouter} from "next/navigation";



type ProductCardProps ={
    data:any
}
export type CartProductType ={
    id:string,
    name:string,
    brand:string,
    quantity:number,
    price:number,
    selectedImg: SelectImgType

}

export type SelectImgType ={
    color:string;
    colorCode:string;
    image:string
}
const Horizontal =()=>{
    return <hr className="w-{30%} my-2"/>
}
export const ProductCard =({data}:ProductCardProps)=>{
    /*const router = useRouter();*/
    const {handleAddProductToCart, cartProducts} = useCart();

    const [isProductInCart, setIsProductInCart] = useState(false);
    const [cardProduct, setCardProduct] = useState<CartProductType>({
        id:data.id,
        name:data.name,
        brand:data.brand,
        quantity:0,
        selectedImg:{...data.images[0]},
        price:data.price

    });

    const router = useRouter()

    useEffect(()=>{
        setIsProductInCart(false)
        if(cartProducts){
           const existingIndex = cartProducts.findIndex((item)=>item.id === data.id)
            if (existingIndex > -1){
                setIsProductInCart(true)
            }
        }
    },[cartProducts])

    const handleColorSelect = useCallback((value:SelectImgType)=>{
        setCardProduct((prev)=>{
            return {...prev,selectedImg:value};
        });
    },[cardProduct.selectedImg]);
    const handleQtyIncrease = useCallback(()=>{
        setCardProduct((prev)=>{
            return {...prev,quantity:++prev.quantity};
        })
    },[cardProduct])
    const handleQtyDecrease = useCallback(()=>{
        if(cardProduct.quantity < 1){
            return;
        }
        setCardProduct((prev)=>{
            return {...prev,quantity:--prev.quantity};
        })
    },[])
    return(
        <div /*onClick={()=>router.push(`/product/${data.id}`)}*/ className="col-span-1 cursor-pointer border-[1.2px]
            border-slate-200 bg-slate-50 rounded-sm p-2 transition
            hover:scale-105 text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image fill className="w-full h-full object-contain" src={data
                        .images[0].image} alt={data.name}/>
                </div>
                <div className="mt-4">
                    {TruncateText(data.name)}
                </div>
                <div><span className="font-semibold">BRAND : </span>
                    {data.brand}
                </div>
                <div className="font-semibold">
                    {FormatPrice(data.price)}
                </div>
                <div className={data.inStock? "text-teal-500":"text-rose-400"}>
                    {data.inStock ? "In Stock":"Out of Stock"}

                </div>
                <Horizontal/>
                {isProductInCart ? <>
                    <p className="mb-2 text-slate-500 flex items-center gap-1">
                        <MdCheckCircle className="text-teal-700" size={20}/>
                        <span>Product Added to cart</span>
                    </p>
                    <Horizontal/>
                    <div className="max-w-{300px}">
                        <Button label="View Cart" onClick={()=>{router.push("/cart")}}/>
                    </div>
                </> :<>
                    <SetQuantity cartProduct={cardProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                    <Horizontal/>
                    <div className="max-w-{300px}">
                        <Button label="Add To Cart" onClick={()=>handleAddProductToCart(cardProduct)}></Button>
                    </div>
                </> }


            </div>
        </div>

    )
}