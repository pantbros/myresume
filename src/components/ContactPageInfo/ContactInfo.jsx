import React from 'react';
import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom

function ContactInfo({ ContactInfos }) {

    // Function to check if the string is a valid email
    const isEmail = (str) => {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return pattern.test(str);
    };

    // Function to check if the string is a valid phone number
    const isPhoneNumber = (str) => {
        const cleaned = str.replace(/[^0-9]/g, '');  // Remove all non-numeric characters
        const isValid = cleaned.length >= 10 && cleaned.length <= 15;  // Ensure the number has 10 to 15 digits
        return isValid;
    };

    // Function to check if the string is a valid URL
    const isValidUrl = (str) => {
        const pattern = /^(https?:\/\/|www\.)[^\s/$.?#].[^\s]*$/i;
        return pattern.test(str);
    };

    // Function to format the phone number and make it clickable (tel: link)
    const formatPhoneNumber = (str) => {
        return str.replace(/[^+0-9]/g, ''); // Remove any non-numeric characters except '+'
    };

    return (
        <div className="flex md:flex-row flex-wrap md:justify-between">
            {ContactInfos.map((info, index) => (
                <div className="flex md:items-center  gap-2 md:ps-10 md:border-l-[3px] border-l-primary-theme-clr" key={index}>
                    <span className='md:text-4xl'>{info.icon}</span>
                    <div className='flex flex-col md:gap-2'>
                        <p className='md:text-3xl font-bold'>{info.text}</p>
                        {/* Render the appropriate link based on the type of info.detail */}
                        {isEmail(info.detail) ? (
                            <a href={`mailto:${info.detail}`} className="text-blue-500 text-sm">
                                {info.detail}
                            </a>
                        ) : isPhoneNumber(info.detail) ? (
                            <a href={`tel:${formatPhoneNumber(info.detail)}`} className="text-blue-500 text-sm">
                                {info.detail}
                            </a>
                        ) : isValidUrl(info.detail) ? (
                            <a href={info.detail} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-sm">
                                {info.detail}
                            </a>
                        ) : (
                            <span className='text-sm'>{info.detail}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContactInfo;
