import React from 'react';

const FromAction = () => {
const handleFromAction=(fromData) =>{
    console.log(fromData.get('name'));
}

    return (
        <div>

            <form action={handleFromAction}>
           <input type="text" placeholder='Your Name' />
           <br></br>
           <input type="email" placeholder='Your Email' />
           <br>
           </br>
           <input type="submit" value='Submit' />

            </form>
            
        </div>
    );
};

export default FromAction;