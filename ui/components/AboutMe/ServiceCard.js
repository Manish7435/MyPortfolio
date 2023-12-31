import {motion} from 'framer-motion'
// import  Tilt  from 'react-tilt';
import { fadeIn } from '@/ui/utils/motion';
import Image from 'next/image';

const ServiceCard = ({ index, title, icon }) => {
  return(
    <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          height={40}
          width={40}
          alt='web-development'
          className='object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
  )
}
   
  

  export default ServiceCard