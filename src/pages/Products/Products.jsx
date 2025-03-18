import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import Blog from "../../components/Blog/Blog";
import Button from '../../components/Buttons/Button';
import {PiPaperPlaneTilt} from "react-icons/pi";
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Footer from '../../components/Footer/Footer';
import profilepic from '../../assets/profile.png';
import productImg1 from "../../assets/react-dashboard.png";
import Product from '../../components/Products/Products';

const productItems = [
  {
    link:'/product-details',
    img:productImg1,
    title:'React Dashboard Template',
    subTitle:'Develop modern, beautiful, and responsive applications in half the time.',
    price:'Price: $120 USD',
    btnTxt:'Add To Cart',
  },
  {
    link:'/product-details',
    img:productImg1,
    title:'React Dashboard Template',
    subTitle:'Develop modern, beautiful, and responsive applications in half the time.',
    price:'Price: $120 USD',
    btnTxt:'Add To Cart',
  },
  {
    link:'/product-details',
    img:productImg1,
    title:'React Dashboard Template',
    subTitle:'Develop modern, beautiful, and responsive applications in half the time.',
    price:'Price: $120 USD',
    btnTxt:'Add To Cart',
  },
]
function Blogs() {
  return (
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
      <div className="px-2 pt-[5rem] pb-10 overflow-auto w-[80%] overflow-y-auto [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      dark:[&::-webkit-scrollbar-track]:bg-[#ccc]
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="w-[70%] mx-auto text-center">
            <SectionTitle secTitle={"Check Out What I've Created for You"} secSubTitle={'Explore a collection of projects where creativity meets code. From sleek, responsive designs to intuitive user experiences, each project represents a unique solution tailored to meet client needs. Dive in to see how ideas transform into digital realities.'} exClassName='text-[1.75rem]'/>
            <Link to='/contact'>
                <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
            </Link>
        </div>
        <hr className='my-10'/>
        <div className='flex gap-3'>
          <Product productItems={productItems}/>
        </div>
        <div className='w-[100%] text-center mx-auto'>
            <Footer/>
        </div>
      </div>  
    </>
  );
}

export default Blogs;