import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { LoginForm } from '../../components/organisms/auth'
import { API } from '../../lib/services'

const LoginPage:NextPage =()=>{
    const {addToast} = useToasts();
    const {push} = useRouter()
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
           if(res.data && res.data.statusCode===200){
            addToast("login successful",{appearance:'success',autoDismiss:true})
            push("/admin")
           }
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