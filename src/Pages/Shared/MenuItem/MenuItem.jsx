import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;
    return (
        <div className='flex justify-center items-center space-x-7 mx-10 md:mx-0'>
            <img className='w-[90px] h-[90px] rounded-full rounded-ss-none' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default MenuItem;