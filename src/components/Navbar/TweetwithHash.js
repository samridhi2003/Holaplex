import React from 'react';
import { useState } from 'react';
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";


export const TweetwithHash = (props) => {
    const [isTwitted, setIsTwitted] = useState(true);

  const handleOnChange = () => {
    setIsTwitted(!isTwitted)
  }
  return (
    <>
    <span className='Twitted'  checked={isTwitted} onChange={handleOnChange}>
       <span className='result'>
        {isTwitted ? <SlCheck/> :<RxCrossCircled/> }
       </span>
       </span>
    </>
  )
}
