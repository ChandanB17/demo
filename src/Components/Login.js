import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='d-flex justify-content-center bg-secondary align-items-center vh-100' id='bg-img'>
        <div className='border border-3 border-secondary p-4 bg-white'>
            <form>
                <h3 className='text-center'>Login</h3>
                <div className='mb-3'>
                    <label htmlFor='email'>Email</label>
                    <input
                    type='email'
                    placeholder='Enter your Email'
                    className='form-control'
                    name='Email'
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'>Password</label>
                    <input
                    type='Password'
                    placeholder='Enter your Password'
                    className='form-control'
                    name='Password'
                    />
                </div>
                <div>
                    <input type='checkbox' className='custom-control custom-checkbox'/>
                    <label htmlFor='checkbox' className='ms-1'>
                        Remember me on this device.
                    </label>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-dark' type='submit'>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login
