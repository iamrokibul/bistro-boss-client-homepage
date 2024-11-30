import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';

const Featured = () => {
    return (
        <section className='p-5 md:p-20 bg-cover bg-center bg-blend-overlay bg-black bg-opacity-70 mb-20 bg-fixed' style={{backgroundImage: `url(${featuredImg})`}}>
            <SectionTitle 
                subHeading="Check it out"
                heading="Featured Item"
                color="white"
            ></SectionTitle>
            <div className='md:flex justify-center items-center gap-10 w-5/6 mx-auto space-y-5'>
                <div className='md:w-3/4'>
                    <img src={featuredImg} alt="Featured Image" />
                </div>
                <div className='text-white md:w-3/4'>
                    <p className='text-lg'>March 10, 2025</p>
                    <h3 className='text-xl uppercase'>Where can i get some</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, quaerat non? Voluptates necessitatibus quos beatae, ex quis harum? Exercitationem, iure?</p>
                    <button className='mt-3 btn btn-success btn-outline border-0 border-b-2'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;