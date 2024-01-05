import Image from "next/image";

const HomeBanner = ()=>{
    return(
        <div className="relative bg-gradient-to-r from-yellow-200 to-yellow-700 mb-8">
            <div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-grow items-center">
                <div className="mb-8 md:mb-0 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">2024 New Year Sale!</h1>
                    <p className="text-lg md:text-xl text-white mb-2">Enjoy discounts on selected items</p>
                    <p className="text-2xl md:text-5xl text-red-700 font-bold">GET more 50% OFF</p>
                </div>
            </div>
        </div>
    )

}

export default HomeBanner;