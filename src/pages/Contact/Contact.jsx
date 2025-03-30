import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Buttons/Button';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import DefaultSideLayout from '../../components/DefaultSideLayout/DefaultSideLayout';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ContactInfo from '../../components/ContactPageInfo/ContactInfo';
import profilepic from '../../assets/profile.png';
import {PiPaperPlaneTilt} from "react-icons/pi";
import {CiLocationOn } from "react-icons/ci";
import {FaRegUser, FaRegEnvelope, FaPhoneAlt, FaPencilAlt, FaGlobe} from "react-icons/fa";
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
const ContactInfos  = [
  {
      icon: <FaRegEnvelope />,
      text: 'Email',
      detail: '+123-456-7890',
  },
  {
      icon: <CiLocationOn />,
      text: 'Location',
      detail: '123 Example Street, City, Country',
  },
  {
      icon: <FaGlobe />,
      text: 'Website',
      detail: 'example@example.com',
  },
];
const inputFields = [
  { name: "name", type: "text", placeholder: "Enter your name", icon: <FaRegUser/>},
  { name: "email", type: "email", placeholder: "Enter your email", icon: <FaRegEnvelope /> },
  { name: "phone", type: "tel", placeholder: "Enter your phone number", icon: <FaPhoneAlt /> },
  { name: "location", type: "text", placeholder: "Enter your location", icon: <CiLocationOn  /> },
  { name: "message", placeholder: "Enter your message", icon: <FaPencilAlt /> }
];

const validate = (name, value) => {
  if (!value.trim()) return `${name} is required`;
  if (name === "email" && !/\S+@\S+\.\S+/.test(value)) return "Invalid email format";
  if (name === "phone" && !/^[0-9]{10}$/.test(value)) return "Invalid phone number";
  return "";
};
function Contact() {
  return (
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
      <DefaultSideLayout>
        <div className='md:w-[80%] text-center mx-auto'>
            <SectionTitle secTitle={'Contact'} secSubTitle={'Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to evans@yourwebsite.com .Want to get connected? Follow me on the social channels below.'} exClassName='text-[1.75rem]'/>
            <Link to='/service-and-pricing'>
                <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
            </Link>
        </div>
        <hr  className='my-10'/>
        <div className='md:w-[80%]'>
          <SectionTitle secTitle={'Contact Details'} secSubTitle={'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'} exClassName='border-l-[4px] border-primary-theme-clr ps-4'/>
        </div>
        <div className='my-10'>
          <ContactInfo ContactInfos={ContactInfos} />
        </div>
          <div className='py-20'>
            <SectionTitle secTitle={'Get In Touch'} secSubTitle={"Open to full-time roles and freelance opportunities. Let's connect and create something amazing together!"} exClassName='border-l-[4px] border-primary-theme-clr ps-4'/>
          </div>
          <ContactForm inputFields={inputFields} validate={validate}/>
        <Footer/>
      </DefaultSideLayout>
    </>
  );
}

export default Contact;