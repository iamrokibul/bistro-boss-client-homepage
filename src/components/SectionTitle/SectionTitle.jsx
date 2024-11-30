import React from 'react';

const SectionTitle = ({heading, subHeading, color}) => {
    const headingStyle={
        color: color || "gray"
    }
    return (
        <div className='text-center mb-8'>
            <p className='text-yellow-400 italic'>---{subHeading}---</p>
            <h2 className='text-4xl border border-b-2 border-t-2 inline-block border-r-0 border-l-0 p-3 text-slate-500 uppercase' style={headingStyle}>{heading}</h2>
        </div>
    );  
};

export default SectionTitle;