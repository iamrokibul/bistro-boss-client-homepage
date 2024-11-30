import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import ChefService from './ChefService/ChefService';
import PopularMenu from './PopularMenu/PopularMenu';
import ChefRecomends from './ChefRecomends/ChefRecomends';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            {/* Call to Action */}
            <div className='py-24 my-20 bg-black text-center'>
                <h3 className='text-white text-4xl font-semibold'>Call Us: +971 55 451 1229</h3>
            </div>
            <ChefRecomends></ChefRecomends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;