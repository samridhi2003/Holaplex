import React from 'react';
import { useState } from 'react';
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";


export const Liked = () => {
    const [isLiked , setIsliked]= useState(false);
     
    const likedOnChange = () => {
         setIsliked(!isLiked)
    }
  return (
    <>
     <div className='likeTwitter' checked={isLiked} onChange={likedOnChange}>
          <div className='TwitterLiked'>
            {isLiked? <SlCheck/> : <RxCrossCircled/>}
          </div>
       </div>
    </>
  );
}
