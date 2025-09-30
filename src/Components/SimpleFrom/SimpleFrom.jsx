import React from 'react';

const SimpleFrom = () => {
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target.name.value);
}

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <input type='text' name='name' placeholder='your name'></input>

                <br></br>

                <input type="submit" value="submit" />


            </form>
            
        </div>
    );
};

export default SimpleFrom;