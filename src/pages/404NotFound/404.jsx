import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Buttons/Button";
function NotFound404(){
    return (
        <div className="px-2 pt-[5rem] pb-10 overflow-auto w-[100%] overflow-y-auto [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-[#ccc]
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="flex flex-col h-full items-center justify-center text-center w-[100%]">
                <SectionTitle secSubTitle={'Sorry, the page you are looking for does not exist.'} secTitle={'404 Page Not Found'} />
                <Link to={'/'}><Button label={'Back To Home'} color={'bg-primary-theme-clr text-[#ffffff] hover:bg-[#000000] hover:text-[#ffffff] py-3 px-6 gap-2 rounded-full capitalize flex items-center mt-5'}/></Link>
            </div>
        </div>
    )
}
export default NotFound404;