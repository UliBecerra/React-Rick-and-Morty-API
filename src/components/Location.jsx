import React from 'react'

function Location({location}) {
  return (
    <div className="text-white  text-center py-10 desktop:hidden" >
      <h2 className='text-[25px] font-light'>Location:<span className=' font-semibold text-[#8EFF8B]'>{location?.name}</span></h2>
      <ul className=' font-light '>
        <li className='text-[20px]'>Type: <span className='font-semibold'>{location?.type}</span></li>
        <li className='text-[20px]'>Dimension: {location?.dimension}</li>
        <li className='text-[15px]'>Population: {location?.residents.length}</li>
      </ul>
    </div>
  )
}

export default Location
