import React from "react";

function SectionTitle({secTitle, secSubTitle, exClassName=''}){
    return (
        <div className="flex flex-col gap-3">
            <h2 className={`${exClassName} text-6xl font-bold relative after:absolute leading-[1.2]`}>{secTitle}</h2>
            <p className="text-md text-[18px]">{secSubTitle}</p>
        </div>
    )
}

export default SectionTitle;