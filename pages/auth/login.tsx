import { NextPage } from 'next'
import React, { useState } from 'react'
import { LoginForm } from '../../components/organisms/auth'
import { API } from '../../lib/services'

const LoginPage:NextPage =()=>{
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })
    const SubmitForm =(e:React.FormEvent)=>{
        e.preventDefault();
        API.post("/v1/auth",{
            email:formData.email,
            password:formData.password
        }).then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <div>
          <form onSubmit={(e)=>{SubmitForm(e)}}>
          <LoginForm formData={formData} setFormData={setFormData} />
          </form>
        </div>
    )
}

export default LoginPage