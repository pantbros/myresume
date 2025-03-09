import React from 'react';
import { Link } from 'react-router-dom';
function ServicePackage({packageName, packagePrice, ServiceLiS=[], listIcon, ButtonLabel, ButtonLabelIcon,classNames, LinkDes}) {
    return (
        <div className={classNames}>
                <div className={`bg-[#fafafa] p-10 border-[1px] border-[#cfcfcf] hover:border-[#5271ff]`}>
                    <div className="text-center w-full max-w-md mx-auto mb-6">
                    <h2 className="text-md font-normal">{packageName}</h2>
                    <p className="text-4xl font-bold text-[#5271ff]">{packagePrice}</p>
                    <p className="text-md font-normal text-gray-500">Per Month</p>
                </div>
                <hr/>
                <ul className="space-y-3 my-10">
                    {ServiceLiS.map((ServiceLi, index) => (
                    <li key={index} className="flex items-center">
                        {listIcon && <span className="mr-2 text-[#3355ff]">{listIcon}</span>}
                        {ServiceLi}
                    </li>
                    ))}
                </ul>
                <Link to={LinkDes} className='block w-max mx-auto'>
                    <button className="bg-[#5271ff] text-white hover:bg-[#000] hover:text-white w-max mx-auto hover:border-[#ccc] border-[1px] px-6
                     py-3 transition-all duration-200 flex items-center gap-2 rounded-full font-bold">
                        <span>{ButtonLabelIcon}</span> {ButtonLabel} 
                    </button>
                </Link>
            </div>
        </div>
    );
  }
  
export default ServicePackage