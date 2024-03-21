import React from 'react'
import '../css/Login.css'
function Login() {
    return (
        <>
            <div className='login-component'>
                <div className='form'>
                    <label>Email</label>
                    <input
                        type='email'
                        name='email'
                    // value={email}
                    // onBlur={cheakEmail}
                    // onChange={(e) => handleInputChange(e, 'email')} 
                    />

                    <label>Password</label>
                    <input
                        type='password'
                        name='pass1'
                    // value={pass1}
                    // onChange={(e) => handleInputChange(e, 'pass1')}
                    // onBlur={cheakPswword}
                    />
                    <label></label>
                    <input
                        type='submit'
                        defaultValue='submit'
                        className='button'
                        // onClick={handleSubmit}
                         />


                </div>
            </div>

        </>
    )
}

export default Login