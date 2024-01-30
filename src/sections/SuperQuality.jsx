import { shoe8 } from '../assets/images';
import Button from '../components/Button';

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-col flex-1'>
        <h2 className='mt-10 text-4xl capitalize max-lg:max-w-lg font-bold font-palanquin'>
          We provide you
          <span className='text-red-500 '> Super </span>
          <span className='text-red-500 '>Quality </span>
          Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text font-montserrat'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text font-montserrat'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          width={570}
          height={522}
          alt='shoe8'
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
