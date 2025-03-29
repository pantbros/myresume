import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import profilepic from '../../assets/profile.png';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Buttons/Button";
import Footer from '../../components/Footer/Footer';
import ServicePackage from '../../components/ServicePackage/ServicePackage';
import { IoMdArrowForward } from "react-icons/io";
import {PiPaperPlaneTilt} from "react-icons/pi";
import { FaCircleCheck } from "react-icons/fa6";

const ServicePackageDataItems = [
  {
    packageName:'Basic',
    packagePrice:'900$',
    serviceList:['Web Development','UI/UX Design','Webflow Development','Website Optimization','24/7 Support'],
    ButtonLabel:'Choose Basic',
    ButtonLabelIcon:<IoMdArrowForward/>,
    listIcon:<FaCircleCheck />,
    LinkDes:'/contact'
  },
  {
    packageName:'Standard',
    packagePrice:'2500$',
    serviceList:['Web Development','UI/UX Design','Webflow Development','Website Optimization','24/7 Support'],
    ButtonLabel:'Choose Standard',
    ButtonLabelIcon:<IoMdArrowForward/>,
    listIcon:<FaCircleCheck />,
    LinkDes:'/contact'
  },
  {
    packageName:'Premium',
    packagePrice:'5000$',
    serviceList:['Web Development','UI/UX Design','Webflow Development','Website Optimization','24/7 Support'],
    ButtonLabel:'Choose Premium',
    ButtonLabelIcon:<IoMdArrowForward/>,
    listIcon:<FaCircleCheck />,
    LinkDes:'/contact'
  },
]
function ServicePricing() {
  return(
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
    <div className="px-2 pt-[5rem] pb-10 overflow-auto w-[80%] overflow-y-auto [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-track]:bg-gray-100
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-gray-300
    dark:[&::-webkit-scrollbar-track]:bg-[#ccc]
    dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <div className='w-[80%] text-center mx-auto'>
          <SectionTitle secTitle={'Want to hire me for custom package?'} secSubTitle={'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore.'} exClassName='text-[1.75rem]'/>
          <Link to='/contact'>
              <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
          </Link>
      </div>
      <hr className='my-20'/>
      <div className="flex items-end">
          <div className="w-[80%]">
            <SectionTitle secTitle='Service Packages' secSubTitle="Explore the range of services I provide to help bring your projects to life. From initial concept to final delivery, I am committed to delivering high-quality results tailored to your needs." exClassName={'border-l-4 border-primary-theme-clr pl-4'}/>
          </div>
        </div>
        <div className="flex justify-between flex-wrap my-20">
            {ServicePackageDataItems.map((ServicePackageData, index)=>(
              <ServicePackage 
              key={index}
              classNames={'w-[32%] transition ease-in duration-300 hover:scale-[1.02]'}
              packageName={ServicePackageData.packageName}
              packagePrice={ServicePackageData.packagePrice}
              ServiceLiS={ServicePackageData.serviceList}
              ButtonLabel={ServicePackageData.ButtonLabel}
              ButtonLabelIcon={ServicePackageData.ButtonLabelIcon}
              listIcon={ServicePackageData.listIcon}
              LinkDes={ServicePackageData.LinkDes}
              />
            ))}
        </div>
        <div className='w-[80%] text-center mx-auto my-20'>
          <SectionTitle secTitle={'A collection of my best projects'} secSubTitle={'With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.'} exClassName='text-[1.75rem]'/>
          <Link to='/contact'>
              <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
          </Link>
        </div>
        <hr />
        
      <Footer/>
    </div>
    </>
  )
}

export default ServicePricing;