import React from 'react';

const Gun = ({ gun, counterIncrease }) => {
    console.log(counterIncrease);
    const { name, id, bullet, category, img, price } = gun;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-lg mt-5">
                <figure><img className='w-full h-40' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}

                    </h2>
                    <p>Price : {price}</p>
                    <div className="card-action text-start">
                        <div className="badge badge-outline mr-4">{bullet}</div>
                        <div className="badge badge-outline">{category}</div>
                        <div className='mt-4'>
                            <button onClick={counterIncrease} className="btn btn-sm mr-4 btn-secondary">Add to cart</button>
                            <button className="btn btn-sm">Details</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Gun;