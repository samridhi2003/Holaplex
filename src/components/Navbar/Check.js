import React from 'react';
import { useState } from 'react';
import { SlCheck } from "react-icons/sl";
import { RxCrossCircled } from "react-icons/rx";

export const Check = (props) => {
  const [isChecked, setIsChecked] = useState(true);

  console.log(Check)

  const handleOnChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <>
      <span className='connectTwitter' checked={isChecked} onChange={handleOnChange}>
        <span className='result'>
          {isChecked ? <SlCheck /> : <RxCrossCircled />}
        </span>
      </span>
    </>
  )
}

export default Check;
