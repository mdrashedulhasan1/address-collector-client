import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const gender = e.target.gender.value;
        const address = e.target.address.value;
        console.log(name, phone, email, gender, address);
        const addressAdd = {
            name,
            phone,
            email,
            gender,
            address
        }
        fetch('http://localhost:5000/all-address', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressAdd)
        },[]);
        navigate(`/all-address`);
    }
    return (
        <div className='flex justify-center h-screen items-center bg-violet-500'>
            <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">Address Collector Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-medium">What is your name?</span>
                            </label>
                            <input type="text" name="name" placeholder="write your name" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-medium">What is your phone number?</span>
                            </label>
                            <input type="number" name="phone" placeholder="write your number" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-medium">What is your email?</span>
                            </label>
                            <input type="email" name="email" placeholder="write your email" className="input input-bordered w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Select Your Gender</span>
                            </label>
                            <label className="label cursor-pointer flex justify-start">
                                <input type="radio" name="gender" value='male' className="mr-2 radio checked:bg-blue-400" />
                                <span className="label-text">Male</span>

                            </label>
                            <label className="label cursor-pointer flex justify-start">
                                <input type="radio" name="gender" value='female' className="mr-2 radio checked:bg-blue-400" />
                                <span className="label-text">Female</span>

                            </label>
                            <label className="label cursor-pointer flex justify-start">
                                <input type="radio" name="gender" value='others' className="mr-2 radio checked:bg-blue-400" />
                                <span className="label-text">Others</span>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Your Address</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name="address" placeholder="write your address" required></textarea>
                        </div>
                        <div className="card-actions justify-center mt-2">
                            <button type="submit" className='btn btn-primary'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;