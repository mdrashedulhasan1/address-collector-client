import React from 'react';

const SingleAddress = ({ info }) => {
    return (
        
            <div className="card w-100 bg-base-100 shadow-xl bg-violet-300">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: {info.name}</h2>
                    <p>Phone Number: {info.phone}</p>
                    <p>Email: {info.email}</p>
                    <p>Gender: {info.gender}</p>
                    <p>Address: {info.address}</p>
                </div>
            </div>
       
    );
};

export default SingleAddress;