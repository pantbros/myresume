import React from "react";
function TechBox({techicon, techTitle, techDesc}){
    return(
        <div className="bg-[rgb(250,250,250)] p-5 lg:w-1/3 xl:w-[23.99%] border-[#ccc] border-[1px] hover:bg-[#ffffff] hover:border-primary-theme-clr transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                    {techicon.map((icon, index) => (
                        <img key={index} src={icon} alt="tech icon" className="w-[10%] h-[10%]"/>
                    ))}
                </div>
                <h4 className="text-xl font-bold">{techTitle}</h4>
                <p className="text-[18px] text-slate-700">{techDesc}</p>
            </div>
        </div>
    )
}
export default TechBox;