import React from 'react';

const FoodItem = ({item}) => {
    const {image, name, recipe} = item;
    return (
        <div className="card bg-base-100 mx-10 md:w-[23rem] shadow-xl rounded-none">
            <figure>
                <img
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title block">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodItem;