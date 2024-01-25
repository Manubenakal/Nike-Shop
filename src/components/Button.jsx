const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red-500 rounded-full text-white border-coral-red'>
      {label}
      <img
        src={iconURL}
        alt='Right arrow'
        className='ml-2 rounded-full 2-5 h-5'
      ></img>
    </button>
  );
};

export default Button;
