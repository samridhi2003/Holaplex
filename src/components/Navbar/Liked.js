import React from "react";
import { useState } from "react";
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";
// import Claim from './Claim';

export const Liked = (props) => {
  const [isLiked, setIsliked] = useState(true);  
  const likedOnChange = () => {
    setIsliked(!isLiked);
  };
  return (
    <>

      <span className="likeTwitter" checked={props.isLiked} onChange={likedOnChange}>
        <span className="TwitterLiked">
          {isLiked ? <SlCheck /> : <RxCrossCircled />}
        </span>
      </span>
    </>
  );
};
