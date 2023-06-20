import React from 'react';
import { useState } from 'react';
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";


export const TweetwithHash = () => {
    const [isTwitted, setIsTwitted] = useState(false);

  const handleOnChange = () => {
    setIsTwitted(!isTwitted)
  }
  return (
    <>
    <div className='Twitted'  checked={isTwitted} onChange={handleOnChange}>
       <div className='result'>
        {isTwitted ? <SlCheck/> :<RxCrossCircled/> }
       </div>
       </div>
    </>
  )
}
