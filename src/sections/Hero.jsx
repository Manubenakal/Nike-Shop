import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
// import Shoecard from '../components/Shoecard';
import ShoeCard from '../components/Shoecard';
import { useState } from 'react';
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id='home'
      className=' w-full  flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container '
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-red-500'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold font-palanquin'>
          <span className='xl:bg-white xl:whitespace-nowrap pr-10 relative z-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-red-500 inline-block mt-3 mr-2'>Nike </span>
          Shoes
        </h1>
        <p className='font-montserrat text-gray-500 text-lg mt-6 mb-14 leading-8 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life
        </p>
        <Button label='Shop Now' iconURL={arrowRight} />
        <div className='flex justify-start items-start w-full mt-20 gap-16 flex-wrap'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-gray-500'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={500}
          className='relative object-contain z-10'
        ></img>

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
