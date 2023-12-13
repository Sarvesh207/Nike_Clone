import React from 'react'

const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
       if(bigShoeImage !== imgURL.bigShoeImage){
        changeBigShoeImage(imgURL.bigShoeImage)
       } 
    }
  return (
    <div className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoeImage ? 'border-coral-red' :'border-transparent'
    } cursor-pointer max-sm:flex-1`}
     onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '><img src={imgURL.thumbnail}  width={127} height={103} className='object-contain' alt="Image" /></div>
    </div>
  )
}

export default ShoeCard