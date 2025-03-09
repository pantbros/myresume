import React from 'react';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import profilepic from '../../assets/profile.png';
function Contact() {
  return (
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
      <h2>Contact Page</h2>
    </>
  );
}

export default Contact;