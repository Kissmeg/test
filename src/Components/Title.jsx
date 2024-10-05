import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className=' inline-flex gap-2 items-center mb-3'>
      <p className='text-neutral-500'>{text1} <span className='text-neutral-800 font-medium'>{text2}</span></p>
    </div>
  )
}

export default Title
