import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const GetTheService = () => {
    const {handleSubmit, register, formState: {errors} } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);

    return (
        <div className="container">
            <h3 className="text-center fw-bold p-3 mt-3">To get the service, fill up the form.</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="container col-md-6 mt-4  fw-normal">
                
                <div className="mb-3">
                    <label>Your name:</label>
                    <input defaultValue={user.displayName} {...register("name", { required: true })} className="form-control"/>
                </div>
                
                <div className="mb-3">
                    <label>Email address:</label>
                    <input defaultValue={user.email} {...register("email", { required: true })} className="form-control"/>
                </div>

                <div className="mb-3">
                    <label>Phone Number:</label>
                    <input defaultValue="+880" className="form-control"/>
                </div>

                <div className="mb-3">
                    <label>Address:</label>
                    <input className="form-control"/>
                </div>
                
                
                {errors.email && <p className="text-danger">This field is required</p>}
                
                <input className="btn btn-primary" type="submit" />
            </form>
        </div>
    );
};

export default GetTheService;