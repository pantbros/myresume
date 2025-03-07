import React from "react";
import { Link } from "react-router-dom";
function Blog({blogImg, blogDate, blogType, BlogTitle,BlogLink}){
    return (
        <Link to={BlogLink} className="w-[32%] flex flex-col gap-4 mx-2">
                <div className="rounded-xl overflow-hidden">
                    <img src={blogImg} alt="" />
                </div>
                <div className="flex flex-col">
                    <p><span>{blogDate}</span> / <span>{blogType}</span></p>
                    <h4>{BlogTitle}</h4>
                </div>
        </Link>
    )
}
export default Blog