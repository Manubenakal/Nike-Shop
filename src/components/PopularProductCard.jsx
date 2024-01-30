import { star } from '../assets/icons';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className='flex flex-1 flex-col w-full  max-sm:w-full'>
      <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
      <div className='mt-8  justify-start gap-2.5'>
        <img src={star} alt='rating' width={24} height={24}></img>
        <p className='font-montserrat text-xl leading-normal text-gray-500'>
          4.5
        </p>
        <h3 className='mt-3 leading-normal text-2xl font-semibold font-palaquin'>
          {name}
        </h3>
        <p className='mt-2 font-semibold font-montserrat text-red-500 text-2xl leading-normal'>
          {price}
        </p>
      </div>
    </div>
  );
};

export default PopularProductCard;
