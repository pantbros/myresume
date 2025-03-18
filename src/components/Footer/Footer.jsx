import React from 'react';
function Footer({copyright, BrandTitle}){
    return(
        <div className='flex justify-between mt-10'>
            <p className='font-bold'>{copyright='Copyright © 2024 Portfolify. All Rights Reserved.'}</p>
            <p className='font-bold'>{BrandTitle='Designed by UIAXIS'}</p>
        </div>
    )
}
export default Footer;