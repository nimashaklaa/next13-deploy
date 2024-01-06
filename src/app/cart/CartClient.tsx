"use client";
import {useCart} from "@/app/hooks/useCart";
import Link from "next/link";
import {MdArrowBack} from "react-icons/md";
import {Button} from "@/app/components/Button";
import {ItemContent} from "@/app/cart/ItemContent";
import {FormatPrice} from "@/app/utils/formatPrice";

export const CartClient =()=>{
    const {cartProducts,handleClearCart,cartTotalAmount} = useCart()

    if(!cartProducts || cartProducts.length === 0){
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">Your Cart is Empty</div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>

        )
    }

    return (<div>
        <h2 className="text-center text-slate-700 font-bold text-2xl pb-8 ">Shopping Cart</h2>
        <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
            <div className="col-span-2 justify-self-start">PRODUCT</div>
            <div className="justify-self-center">PRICE</div>
            <div className="justify-self-center">QUANTITY</div>
            <div className="justify-self-end">TOTAL</div>
        </div>
        <div>
            {cartProducts && cartProducts.map((item)=>{
                return <ItemContent key={item.id} item={item}/>
            })}
        </div>
        <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
            <div className="w-[110px]">
                <Button label="Clear Cart" onClick={()=>{handleClearCart()}} outline/>
            </div>
            <div className="text-sm flex flex-col gap-1 items-start ">
                <div className="flex justify-between gap-20 text-base font-semibold">
                    <span>Subtotal</span>
                    <span>{FormatPrice(cartTotalAmount)}</span>
                </div>
                <Button label="Checkout" onClick={() => {
                }}/>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack/>
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};