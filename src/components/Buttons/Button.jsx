import React from "react";
function Button({color,icon,label}){
    return(
      <>
        <button
          className={`${color} py-3 px-6 gap-2 rounded-full capitalize flex items-center mt-5`}>
          {icon} {label}
        </button>
    </>
    )
}

export default Button;