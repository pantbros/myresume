import React from 'react';
import PropTypes from 'prop-types';
ContactCta.propTypes = {
    bgImage: PropTypes.string.isRequired,  // Ensures bgImage is a string and is required
};
function ContactCta({bgImage, children}){
    return(
        <div className='bg-cover bg-center bg-fixed bg-attchment w-[100%] text-[#ffffff] md:px-10 md:py-20 p-5' style={{ backgroundImage: `url(${bgImage})` }}>
            {children}
        </div>
    )
}

export default ContactCta;