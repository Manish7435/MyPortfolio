import React from 'react'
import Pi from './Pi';
import getOffsetFromPercent from '@/ui/utils/getOffsetFromPercent';


const MySkills = () => {
  

    return (<div className='sm:px-44 px-6 mt-16'>
        <div className='text-white mr-4 text-3xl'>My Skills</div>
        <div className='flex justify-between flex-wrap mt-8'>
        <Pi percent={getOffsetFromPercent(45)} title={'HTML'}/>
        <Pi percent={getOffsetFromPercent(90)} title={'CSS'}/>
        <Pi percent={getOffsetFromPercent(70)} title={'Tailwind'}/>
        <Pi percent={getOffsetFromPercent(87)} title={'Javascript'}/>
        <Pi percent={getOffsetFromPercent(90)} title={'ReactJS'}/>
        <Pi percent={getOffsetFromPercent(90)} title={'NextJS'}/>

        </div>
    </div>
    )
}

export default MySkills