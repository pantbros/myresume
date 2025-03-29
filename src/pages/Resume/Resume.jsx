import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { CiMail,CiPhone ,CiGlobe,CiLocationOn,CiLinkedin } from "react-icons/ci";
import { FaGithub, FaInstagram,FaFacebook } from "react-icons/fa";
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import Footer from '../../components/Footer/Footer';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Button from '../../components/Buttons/Button';
import CV from '../../components/Resume/Resume.jsx';
import profilepic from '../../assets/profile.png';



const ResumeData = {
  Name:'Chris Evans',
  Destination:'Senior Software Engineer',
  BasicInfo: [
    { icon: <CiPhone/>, data: "0123 4567 890" },
    { icon: <CiMail/>, data: "Evans@yourwebsite.com" },
    { icon: <CiGlobe/>, data: "www.yourwebsite.com" },
    { icon: <CiLocationOn/>, data: "Delhi, India" },
  ],
  profilePic:profilepic,
  profileSummary:'Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
  breifIntro: [
    {
      title:"Work Experiences",
      subtitle:'Senior Software Engineer',
      company:'Google',
      timeLine:'2023 - Present',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[
        {listContent:'Lorem ipsum dolor sit amet, consectetuer.'},
        {listContent:'Aenean commodo ligula eget dolor.'},
        {listContent:'Etiam ultricies nisi vel augue.'},
      ]
    },
    {
      title:"",
      subtitle:'Lead Software Developer',
      company:'Apple',
      timeLine:'2016 - 2019',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[
        {listContent:'Lorem ipsum dolor sit amet, consectetuer.'},
        {listContent:'Aenean commodo ligula eget dolor.'},
        {listContent:'Etiam ultricies nisi vel augue.'},
      ]
    },
    {
      title:"",
      subtitle:'Senior Software Developer',
      company:'Dropbox',
      timeLine:'2014 - 2016',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[
        {listContent:'Lorem ipsum dolor sit amet, consectetuer.'},
        {listContent:'Aenean commodo ligula eget dolor.'},
      ]
    },
    {
      title:"",
      subtitle:'Senior Developer',
      company:'Google',
      timeLine:'2023 - Present',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[]
    },
    {
      title:"",
      subtitle:'Senior Software Engineer',
      company:'Google',
      timeLine:'2023 - Present',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[]
    },
    {
      title:"Projects",
      subtitle:'Project Lorem Ipsum',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[]
    },
    {
      subtitle:'Project Lorem Ipsum',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[]
    },
    {
      subtitle:'Project Lorem Ipsum',
      summary:'Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.',
      lists:[]
    },
  ],
  social:[
    {
      name:'github.com/username',
      icon:<FaGithub/>,
      link:'http://github.com/',
    },
    {
      name:'instagram.com/username',
      icon:<FaInstagram />,
      link:'http://instagram.com/',
    },
    {
      name:'facebook.com/username',
      icon:<FaFacebook />,
      link:'http://facebook.com/',
    },
    {
      name:'linkedin.com/username',
      icon:<CiLinkedin />,
      link:'http://linkedin.com/',
    },
    {
      name:'twitter.com/username',
      icon:<CiLinkedin/>,
      link:'http://twitter.com/',
    },
  ],
  sidePoints:[
    {
      title:'Skills',
      subtTitle:'Technical',
      lists:[
        {content:'JavaScript/React/Vue'},
        {content:'Python/Ruby/PHP'},
        {content:'Node.js/ASP.NET'},
        {content:'PostgreSQL/MySQL'},
        {content:'Object-oriented design'},
        {content:'Design and implement database structures'},
        {content:'Lead and deliver complex software systems'},
      ],
      skillDesc:[{icon:'', iconTitle:'',iconDate:'',}]
    },
    {
      title:'',
      subtTitle:'Professional',
      lists:[
        {content:'Effective communication'},
        {content:'Team player'},
        {content:'Strong problem solver'},
        {content:'Good time management'},
        {content:'Object-oriented design'},
        {content:'Design and implement database structures'},
        {content:'Lead and deliver complex software systems'},
      ],
      skillDesc:[{icon:'', iconTitle:'',iconDate:'',}]
    },
    {
      title:'Education',
      subtTitle:'',
      lists:[],
      skillDesc:[
          {
          icon:<IoCallOutline/>, 
          iconTitle:'MSc in Computer Science University College London',
          iconDate:'2010 - 2011',
          },
          {
            icon:<IoCallOutline/>, 
            iconTitle:'MSc in Computer Science University College London',
            iconDate:'2010 - 2011',
          },
      ]
    },
    {
      title:'Awards',
      subtTitle:'',
      lists:[],
      skillDesc:[
          {
          icon:<IoCallOutline/>, 
          iconTitle:'MSc in Computer Science University College London',
          iconDate:'2010 - 2011',
          },
          {
            icon:<IoCallOutline/>, 
            iconTitle:'MSc in Computer Science University College London',
            iconDate:'2010 - 2011',
          },
      ]
    },
    {
      title:'Languages',
      subtTitle:'',
      lists:[
        {content:'English(Native)'},
        {content:'Spanish (Professional)'},
      ],
      skillDesc:[]
    },
    {
      title:'Interests',
      subtTitle:'',
      lists:[
        {content:'Climbing'},
        {content:'Snowboarding'},
        {content:'Photography'},
        {content:'Travelling'},
      ],
      skillDesc:[]
    },
  ]
}
function Resume() {
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
        <div className="w-100 text-center">
          <SectionTitle secTitle={'Online Resume'} secSubTitle={''} exClassName='text-[2rem]'/>
          <Link to={'/resume.pdf'} target='_blank' download>
             <Button color={'bg-primary-theme-clr text-[#ffffff] hover:bg-white hover:text-black w-max mx-auto hover:border-[#ccc] border-[1px]'} label={'Download Resume'} icon={<IoMdArrowForward/>} />
          </Link>
        </div>
        <hr className='my-10'/>
        <CV user={ResumeData}/>
        <Footer/>
      </div>
    </>
  );
}

export default Resume;