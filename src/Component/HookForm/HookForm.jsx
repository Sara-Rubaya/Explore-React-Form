import React from 'react';
import UseInputFields from '../../hooks/UseInputFields';

const HookForm = () => {
    const [name, nameOnChange] = UseInputFields('');
    const [email, emailOnChange] = UseInputFields('');
    const[password, passwordOnChange] = UseInputFields('');

    const handleSubmit = e =>{
      e.preventDefault();
      console.log('submit', name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Name' onChange={nameOnChange} defaultValue={name}/>
                <br />
                <input type="email" name="email" onChange={emailOnChange} placeholder="Email" />
                <br />
                <input type="password" name="password" onChange={passwordOnChange} placeholder="Password" />
                <br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default HookForm;