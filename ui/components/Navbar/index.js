import React from 'react'

const Navebar = () => {
    const navItems = ["Home", "About me"];
  return (
    <nav className='bg-black '>        
          <div className='flex justify-between'>
            <div className="text-xl  p-2 text-green-500 m-6">Home</div>
            <div className="text-xl rounded-lg bg-gradient-to-r from-green-500 to-teal-500 p-2 text-black-500 m-6">About me</div>
          </div>
  </nav>
  )
}

export default Navebar