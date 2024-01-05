"use client";

import Image from "next/image";

type ProductCardProps ={
    data:any
}
export const ProductCard =({data}:ProductCardProps)=>{
    return(
    <div>
        <div>
            <div className="col-span-1 cursor-pointer border-[1.2px]
            border-slate-200 bg-slate-50 rounded-sm transition
            hover:scale-105 text-center text-sm">

            </div>
            <div className="flex flex-col items-center w-full gap-1">
                <div>
                    <Image fill className="w-full h-full" src={} alt={}/>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
)
}