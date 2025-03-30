import React from 'react';
const year = new Date().getFullYear();
function Footer({copyright, BrandTitle}){
    return(
        <div className='flex justify-between mt-10 flex-col md:flex-row text-center md:text-left'>
            <p className='font-bold'>{copyright=`Copyright © ${year} Portfolify. All Rights Reserved.`}</p>
            <p className='font-bold'>{BrandTitle='Designed by UIAXIS'}</p>
        </div>
    )
}
export default Footer;