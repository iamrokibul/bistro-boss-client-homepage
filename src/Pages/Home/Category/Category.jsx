// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
//Slider images
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='py-10'>
            <SectionTitle
                subHeading={"From 11:00AM to 10:00PM"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="Category image" />
                    <h3 className='md:text-4xl text-lg uppercase text-center -mt-16 pb-5 text-white'>Salads</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Category image" />
                    <h3 className='md:text-4xl text-lg uppercase text-center -mt-16 pb-5 text-white'>Pizza</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Category image" />
                    <h3 className='md:text-4xl text-lg uppercase text-center -mt-16 pb-5 text-white'>Soups</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="Category image" />
                    <h3 className='md:text-4xl text-lg uppercase text-center -mt-16 pb-5 text-white'>Desserts</h3>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="Category image" />
                    <h3 className='md:text-4xl text-lg uppercase text-center -mt-16 pb-5 text-white'>Salads</h3>
                    </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;