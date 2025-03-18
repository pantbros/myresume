import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { HiDocumentText } from "react-icons/hi2";
import {Link} from 'react-router-dom';
// import Meta from  "../../components/Meta/Meta";
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import Typewriter from "../../components/Typewriter/Typewriter";
import profilepic from '../../assets/profile.png';
import Button from "../../components/Buttons/Button";
import PortfolioExperience from "../../components/PortfolioExperience/PortfolioExperience";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Features from '../../components/Features/Features';
import TechBox from "../../components/TechBox/TechBox";
import Blog from "../../components/Blog/Blog";
import ContactCta from "../../components/ContactCta/ContactCta";
import Footer from '../../components/Footer/Footer';
import TechBoxIcon1 from "../../assets/techlang/js.png";
import bgImage from '../../assets/bg.png';
import profilePic from "../../assets/user.jpg";
import featureImg from "../../assets/project1.png";
import blogImg1 from "../../assets/blog1.png";

const ButtonData = [
  {
    icon: <IoMdArrowForward />,
    color: "bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff]",
    label: "View Portfolio",
    link:'/portfolio',
  },
  {
    icon: <HiDocumentText />,
    color: "bg-[#000000] text-[#ffffff] hover:bg-primary-theme-clr hover:text-[#ffffff]",
    label: "View Resume",
    link:'/resume',
  },
]

// section contents start
const PortfolioExperienceData = [
  {
    portInfoNumber:'5',
    portInfoTitle:'Years of Experience',
  },
  {
    portInfoNumber:'110',
    portInfoTitle:'Project Completed',
  },
  {
    portInfoNumber:'6k',
    portInfoTitle:'Clients Worldwide',
  },
]
const TechBoxData = [
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
  {
    techicon:[TechBoxIcon1, TechBoxIcon1, TechBoxIcon1],
    techTitle:'Vanilla JavaScript',
    techDesc:'List skills and technologies here. Customize as needed. Built on HTML5, Sass, and Bootstrap 5.'
  },
]
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

const blogData = [
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
  {
    blogImg:blogImg1,
    blogDate:'March 18, 2024',
    blogType:'Articles',
    BlogTitle:'7 Great Web Development Languages to Learn this Year'
  },
]
// section contents ends

function About({title, subtitle, titleContent}){
 return (
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
      <div className="px-2 pt-[5rem] pb-10 overflow-auto w-[80%] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-[#ccc] dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="flex items-center">
            <div className='w-[40%] flex flex-col gap-3'>
              <span className='text-2xl font-medium'>{title='HI, I\'M A'}</span>
              <h1 className='text-8xl font-bold text-primary-theme-clr leading-[120px]'>
                <Typewriter texts={['Developer', 'Designer', 'Marketer']} speed={200} eraseSpeed={120} />
              </h1>
              <p>{titleContent='I\'m a software engineer specializing in scalable web apps. Explore my blog, project portfolio and online resume.'}</p>
              <div className='flex gap-2'>
                {ButtonData.map((btn, index)=>(
                  <Link key={index} to={btn.link}>
                    <Button icon={btn.icon} label={btn.label} color={btn.color}/>
                  </Link>
                ))}
              </div>
            </div>
            <div className="ms-auto w-[50%]">
              <div className="relative w-max ms-auto overflow-hidden">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="block"
                />
                <div className="absolute inset-0 bg-primary-theme-clr opacity-50 z-[-1] p-2 animate-tilt"></div>
                </div>
            </div>
        </div>
        <div className="flex gap-4 mt-9 w-[40%]">
          {PortfolioExperienceData.map((portData, index)=>(
            <PortfolioExperience key={index} portInfoTitle={portData.portInfoTitle} portInfoNumber={portData.portInfoNumber}/>
          ))}
        </div>
        <hr className="my-20"/>
        <div className="flex items-end">
          <div className="w-[80%]">
            <SectionTitle secTitle='What I do' secSubTitle="I have more than 10 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my  online resume and project portfolio." exClassName={'border-l-4 border-primary-theme-clr pl-4'}/>
          </div>
          <div className="w-[20%]">
            <Link to='/service-and-pricing'><Button icon={<IoMdArrowForward />} label='Service & Pricing' color='bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff] w-max ms-auto'/></Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 my-5">
          {TechBoxData.map((techbxData, index)=>(
            <TechBox key={index} techicon={techbxData.techicon} techTitle={techbxData.techTitle} techDesc={techbxData.techDesc}/>
          ))}
        </div>
        <div className={`flex flex-wrap gap-3 my-5`}>
            <ContactCta bgImage={bgImage}>
             <div className="flex items-center">
                <div className="w-[80%]">
                  <SectionTitle secTitle='Let’s Work together on your next Project' secSubTitle="I am available for freelance projects. Hire me and get your project done."/>
                </div>
                <div className="w-[50%]">
                  <Link to="/contact">
                    <Button icon={<IoMdArrowForward />} label={"Let's Get In Touch"} color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max ms-auto'}/>
                  </Link>
                </div>
             </div>
            </ContactCta>
        </div>
        <div className="flex items-end">
          <div className="w-[80%]">
            <SectionTitle secTitle='Featured Projects' secSubTitle="My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take care of every detail, allowing you to focus on what you do best." exClassName={'border-l-4 border-primary-theme-clr pl-4'}/>
          </div>
          <div className="w-[20%]">
            <Link to='/portfolio'><Button icon={<IoMdArrowForward />} label='View Portfolio' color='bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff] w-max ms-auto'/></Link>
          </div>
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
        <div className="flex items-end">
          <div className="w-[80%]">
            <SectionTitle secTitle='Latest Blog Posts' secSubTitle="More than 1500+ agencies using Portfolify" exClassName={'border-l-4 border-primary-theme-clr pl-4'}/>
          </div>
          <div className="w-[20%]">
            <Link to='/blog'>
              <Button icon={''} label='See All Articles' color='bg-primary-theme-clr text-[#ffffff] hover:bg-black hover:text-[#ffffff] w-max ms-auto'/>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap gap-y-5 pt-10 ">
          {blogData.map((bData, index) => (
            <Blog key={index} blogImg={bData.blogImg} blogDate={bData.blogDate} blogType={bData.blogType} BlogTitle={bData.BlogTitle}/>
          ))}
        </div>
        <Footer/>
      </div>
    </>
 )   
}

export default About;