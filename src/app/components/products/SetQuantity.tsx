"use client";

import {CartProductType} from "@/app/components/products/ProductCard";

type SetQuantityProps ={
    cartCounter?:boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: ()=> void;
    handleQtyDecrease: ()=> void;
}
const btnStyle ="border-[1.2px] border-slate-300 px-2 rounded"
export const SetQuantity=({cartProduct, cartCounter, handleQtyIncrease, handleQtyDecrease}:SetQuantityProps)=>{
    return(
        <div className="flex gap-8 items-center">
            {cartCounter ? null: <div className="font-semibold">Quantity</div>}
            <div className="flex gap-4 items-center text-base">
                <button onClick={handleQtyDecrease} className={btnStyle}>-</button>
                <div>{cartProduct.quantity}</div>
                <button onClick={handleQtyIncrease} className={btnStyle}>+</button>
            </div>
        </div>
    )
}