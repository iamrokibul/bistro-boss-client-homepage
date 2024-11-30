import React from 'react';
import serviceBg from '../../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div
            className='flex justify-center items-center bg-cover bg-center h-80 max-w-screen-md mx-auto mb-14'
            style={{ backgroundImage: `url(${serviceBg})` }}
        >
            <div className='bg-white max-w-screen-sm min-h-32 flex justify-center items-center flex-col gap-3 p-10 text-center'>
                <h2 className='text-3xl uppercase'>Bristo Boss</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla assumenda soluta mollitia harum consequuntur vero, beatae quo itaque a totam! soluta mollitia harum consequuntur vero, beatae quo itaque a totam!</p>
            </div>
        </div>
    );
};

export default ChefService;