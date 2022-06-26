import React from 'react';

export const Login = () => {
    return (
        <div>
            <p>Login</p>
            <form>
                <div>
                    <label>Email address</label>
                    <input type='text' placeholder='Enter email' />
                </div>
                <div>
                    <label>Password</label>
                    <input type='text' placeholder='Enter password' />
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}