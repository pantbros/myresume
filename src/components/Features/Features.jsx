import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp } from "react-icons/io";
function Features({ FeatureImg, techFeatures, featureTitle, featureLinkIcon,LinkDestination}) {
  return (
    <div className="md:w-[50%] p-2 flex flex-col gap-3 md:flex-wrap">
      <div>
        <img src={FeatureImg} alt=""/>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4 md:w-[unset] w-70%">
            <div className="flex gap-2 flex-wrap w-[100%] md:w-[unset]">
                {techFeatures.map((techFeature, index) => (
                <span key={index} className="py-2 px-4 rounded-full border-[1px] border-[#ccc] text-sm font-medium">
                    {techFeature}
                </span>
                ))}
            </div>
            <Link to={LinkDestination}><h4 className="text-2xl font-semibold hover:text-primary-theme-clr">{featureTitle}</h4></Link>
        </div>
        <div>
            <Link to={LinkDestination}>
               <button className="group w-[50px] h-[50px] rounded-full border-[1px] bg-[#dcdcdc] transition-all duration-300 ease-out hover:bg-primary-theme-clr hover:border-primary-theme-clr border-[#ccc] flex items-center justify-center me-10">
                <IoIosArrowRoundUp className="text-2xl font-bold transition-all duration-300 ease-out rotate-45 group-hover:rotate-90 group-hover:text-[#ffffff]" />
                </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Features;