"use client";

import Image from "next/image";

import {FormatPrice} from "@/app/utils/formatPrice";
import {useRouter} from "next/navigation";
import {TruncateText} from "@/app/utils/TruncateText";
import {product} from "@/app/utils/product";
import {useState} from "react";


type ProductCardProps ={
    data:any
}
export type CartProductType ={
    id:string,
    name:string,
    brand:string,
    quantity:number,
    price:number

}
export const ProductCard =({data}:ProductCardProps)=>{
    /*const router = useRouter();*/
    const [cardProduct, setCardProduct] = useState<CartProductType>({
        id:data.id,
        name:data.name,
        brand:data.brand,
        quantity:1,
        price:data.price
    });
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
                <div>Quantity</div>
                <div>Add to Cart</div>
            </div>
        </div>

    )
}