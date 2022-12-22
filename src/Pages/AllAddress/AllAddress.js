import React, { useEffect, useState } from 'react';
import SingleAddress from '../SingleAddress/SingleAddress';

const AllAddress = () => {
    const [address, setAddress] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-address')
            .then(res => res.json())
            .then(data => setAddress(data))
    })
    return (
        <div className='mx-12 mt-12'>
            <h1 className='text-4xl font-bold'>Total population:{address.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                {
                    address.map(info => <SingleAddress info={info} key={address._id}></SingleAddress>)
                }
            </div>
        </div>
    );
};

export default AllAddress;