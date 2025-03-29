import React from "react";
import { Link } from "react-router-dom";
function Products({productItems}){
    return (
        <>
            {productItems.map((productItem, index)=>(
                <div className="flex flex-col gap-y-2" key={index}>
                    <div className="border p-2">
                        <Link to={productItem.link}>
                            <img src={productItem.img} alt="" />
                        </Link>
                    </div>
                    <Link to={productItem.link}>
                        <h4 className="text-3xl font-semibold">{productItem.title}</h4>
                    </Link>
                    <p className="text-lg">{productItem.subTitle}</p>
                    <p className="text-xl font-semibold">{productItem.price}</p>
                    <div className="flex">
                        <Link to={productItem.link}>
                            <button className="bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff] hover:border-[#ccc] border-[1px] px-4 py-2  rounded-lg ">{productItem.btnTxt}</button>
                        </Link>
                        <Link to={productItem.link}>
                            <button className="bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff] hover:border-[#ccc] border-[1px] px-4 py-2  rounded-lg ">{productItem.btnTxt}</button>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    ) 
};
export default Products;