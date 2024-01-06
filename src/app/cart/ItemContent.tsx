"use client";
import {CartProductType} from "@/app/components/products/ProductCard";
import {FormatPrice} from "@/app/utils/formatPrice";
import {TruncateText} from "@/app/utils/TruncateText";
import {Button} from "@/app/components/Button";
import Image from "next/image";
import {SetQuantity} from "@/app/components/products/SetQuantity";

type ItemContentProps ={
    item:CartProductType
}

export const ItemContent =({item}:ItemContentProps) =>{

    return (
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
            <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
                <div className="relative w-[80px] aspect-square">
                    <Image src={item.selectedImg.image} alt={item.name} fill className="object-contain"/>
                </div>
                <div className="flex flex-col justify-between">
                    {TruncateText(item.name)}
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button className="text-slate-500 underline " onClick={()=>{}}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{FormatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity cartCounter={true} cartProduct={item} handleQtyIncrease={()=>{}} handleQtyDecrease={()=>{}}/>
            </div>
            <div className="justify-self-end font-semibold">{FormatPrice(item.price * item.quantity)}</div>
        </div>
    )

}