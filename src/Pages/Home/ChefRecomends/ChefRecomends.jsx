import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FoodItem from '../../Shared/FoodItem/FoodItem';

const ChefRecomends = () => {
    const [foodItem, setFoodItem] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const items = data.slice(2, 5);
            setFoodItem(items);
        });
    },[])
    return (
        <section>
            <SectionTitle
                subHeading="Should Try"
                heading="chef recommends"
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-5 mb-20'>
                {
                    foodItem.map(item => <FoodItem key={item._id} item={item}></FoodItem>)
                }
            </div>
        </section>
    );
};

export default ChefRecomends;