import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import profilepic from '../../assets/profile.png';
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Features from '../../components/Features/Features';
import Button from "../../components/Buttons/Button";
import Footer from '../../components/Footer/Footer';
import featureImg from "../../assets/project1.png";
import {PiPaperPlaneTilt} from "react-icons/pi";
const featureData = [
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
  {
    featureImg:featureImg,
    featureIcon:['React Js', 'gsap', 'Web Development'],
    featureTitle:'Crypto Website Development for DeFi X',
    LinkDestination:'/Portfolio',
  },
]
function Portfolio() {
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
            <SectionTitle secTitle={'A collection of my best projects'} secSubTitle={'With many years in web development, I acquired extensive experience working on projects across multiple industries and technologies. Let me show you my best creations.'} exClassName='text-[1.75rem]'/>
            <Link to='/service-and-pricing'>
                <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
            </Link>
        </div>
        <div className="flex flex-wrap gap-y-5 py-10">
            {featureData.map((fData, index) => (
                  <Features 
                    key={index} 
                    FeatureImg={fData.featureImg}  
                    techFeatures={fData.featureIcon} 
                    featureTitle={fData.featureTitle}
                    LinkDestination={fData.LinkDestination}
                  />
              ))}
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Portfolio;