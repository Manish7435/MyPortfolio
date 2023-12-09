import React from 'react'
import getPercentFromOffset from '@/ui/utils/getPercentFromOffset'


const Pi = ({ percent, title }) => {
    const realPercent = getPercentFromOffset(percent)
    return (
        <div className='w-[100px] text-center mr-4 '>
            <div className='w-[100px] h-[100px] relative'>
                <div className='w-[100px] h-[100px] flex rounded-full  justify-center items-center shadow-3xl '>
                    <div className='w-[80px] h-[80px] flex rounded-full justify-center items-center shadow-inner'>
                        <div className='flex items-center justify-center text-white'>
                            {`${realPercent}%`}
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px" className='absolute top-0 left-0 z-10'>
                    <circle className='fill-none stroke-[#09f755] stroke-10' cx="50" cy="50" r="45" strokeLinecap="round" strokeDasharray={280} strokeDashoffset={percent} />
                </svg>
            </div>
            <div className='text-white mt-4  '>{title}</div>
        </div>
    )
}

export default Pi