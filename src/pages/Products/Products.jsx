import React from 'react';
import LeftSidePane from '../../components/LeftSidePane/LeftSidePane';
import profilepic from '../../assets/profile.png';
function Products() {
  return (
    <>
      <LeftSidePane name='Chris Evans' designation='Senior Software Engineer' profilepic={profilepic}/>
      <h2>Products Page</h2>
    </>
  );
}

export default Products;