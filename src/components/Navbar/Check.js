import React from 'react';
import { useState } from 'react';
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";

export const Check = () => {
    const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <> <div className='connectTwitter'  checked={isChecked} onChange={handleOnChange}>
       <div className='result'>
        {isChecked ? <SlCheck/> :<RxCrossCircled/> }
       </div>
       </div>
         </>
  )
}

export default Check;
