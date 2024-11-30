import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import '@smastrom/react-rating/style.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[]);
    return (
        <section>
            <SectionTitle
                subHeading={"What Out Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='flex justify-center items-center space-y-5 flex-col md:py-10 md:px-40 px-10 py-5 text-center'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className='text-7xl'></FaQuoteLeft>
                                <p>{review.details}</p>
                                <h3 className='text-2xl text-yellow-600 uppercase'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;