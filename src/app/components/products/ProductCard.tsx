"use client";

import Image from "next/image";

import {FormatPrice} from "@/app/utils/formatPrice";
import {useRouter} from "next/navigation";
import {TruncateText} from "@/app/utils/TruncateText";
import {product} from "@/app/utils/product";
import {useCallback, useState} from "react";
import {SetQuantity} from "@/app/components/products/SetQuantity";
import {Button} from "@/app/components/Button";


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
export const ProductCard =({data}:ProductCardProps)=>{
    /*const router = useRouter();*/
    const [cardProduct, setCardProduct] = useState<CartProductType>({
        id:data.id,
        name:data.name,
        brand:data.brand,
        quantity:0,
        selectedImg:{...data.images[0]},
        price:data.price

    });
    const handleColorSelect = useCallback((value:SelectImgType)=>{
        setCardProduct((prev)=>{
            return {...prev,selectedImg:value};
        })
    },[cardProduct.selectedImg])
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
                <div className={data.inStock? "text-teal-400":"text-rose-400"}>
                    {data.inStock ? "In Stock":"Out of Stock"}

                </div>
                <SetQuantity cartProduct={cardProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease}/>
                <div className="max-w-{300px}">
                    <Button label="Add To Cart" onClick={()=>{}}></Button>
                </div>

            </div>
        </div>

    )
}