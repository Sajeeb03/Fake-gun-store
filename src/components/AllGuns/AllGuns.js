import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Gun from '../Gun/Gun';

const AllGuns = ({ counterIncrease }) => {
    // console.log(counterIncrease)
    const [allGuns, setAllGuns] = useState([]);
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setAllGuns(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-4'>Welcome to My store</h1>
            <p className='w-[90%] m-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae nobis veniam odit dolor cumque amet quam optio fuga repudiandae quia velit accusantium, voluptatem ad magnam quo, quae doloremque architecto? Atque!</p>
            <p className='font-semibold text-center'>Number of guns: {allGuns.length}</p>
            <div className='w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    allGuns.map(gun => <Gun gun={gun} counterIncrease={counterIncrease} key={gun.id}></Gun>)
                }
            </div>
        </div>
    );
};

export default AllGuns;