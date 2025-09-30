import React, { useState } from 'react';

const ControlledField = () => {

    const [password,setPassword] =useState('')
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log('submitted');


}
const handlePasswordOnChenge=e=>{
    console.log(e.target.value)
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
       <input type="email" name='email' id='' placeholder='Enter our email' required />
       <br></br>
       <input type="password" name='password'id='' placeholder='Password' onChange={handlePasswordOnChenge} defaultValue={password}  required />
       <br></br>
       <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default ControlledField;