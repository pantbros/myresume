import React from "react";
function DefaultSideLayout({children}){
    return (
        <div className="px-2 py-7 md:pt-[5rem] md:pb-10 overflow-auto w-[100%] md:w-[80%] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-[#ccc] dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {children}
        </div>
    )
}
export default DefaultSideLayout;