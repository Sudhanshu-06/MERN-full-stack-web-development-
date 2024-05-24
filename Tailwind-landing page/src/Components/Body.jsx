import React from 'react'

const Body = () => {
  return (
    <div>
        <div className='flex item-center justify-center'>
        <img src="./public/assets/Blue-Shape.svg" alt="1st" className='-rotate-45 h-64'/>
        <img src="./public/assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64' />
        <img src="./public/assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64' />
        <img src="./public/assets/Hero-Model.png" alt="4tth" className='absolute' h-64 />
        </div>
        <div>
            <h1>Host your website in less than 5 minutes</h1>
            <p>with Hoster,get youe</p>
        </div>
    </div>
  )
}

export default Body