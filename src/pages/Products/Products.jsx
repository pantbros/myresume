import React from 'react';
import { Link } from 'react-router-dom';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import DefaultSideLayout from '../../components/DefaultSideLayout/DefaultSideLayout';
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
      <DefaultSideLayout>
        <div className="w-[70%] mx-auto text-center">
            <SectionTitle secTitle={"Check Out What I've Created for You"} secSubTitle={'Explore a collection of projects where creativity meets code. From sleek, responsive designs to intuitive user experiences, each project represents a unique solution tailored to meet client needs. Dive in to see how ideas transform into digital realities.'} exClassName='text-[1.75rem]'/>
            <Link to='/contact'>
                <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Hire Me'} icon={<PiPaperPlaneTilt/>}/>
            </Link>
        </div>
        <hr className='my-10'/>
        <div className='flex flex-col md:flex-row gap-3'>
          <Product productItems={productItems}/>
        </div>
        <div className='w-[100%] text-center mx-auto'>
            <Footer/>
        </div>
      </DefaultSideLayout>  
    </>
  );
}

export default Blogs;