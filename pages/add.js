import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import Layout from '../components/layout'
import { Input, Label, SuccessBox } from '../components/styled-elements'
import ActionButton from '../components/button-with-row'
import notify from '../components/store-notification'
import { apiDomain } from '../constants'

const AddAccount = () => {

  const formStyle = {
    width: '60%'
  }

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [domain, setDomain] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    const apiUrl = apiDomain + `whm/account`

    setIsLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setIsLoading(false)
        setIsSuccess(true)
        notify(res.message)
      });
  };
  
  const domainChange = event => {
    setDomain(event.target.value)
  }
  const usernameChange = event => {
    setUsername(event.target.value)
  }
  const passwordChange = event => {
    setPassword(event.target.value)
  }
  
  return (
    <Layout title="Add Account" loading={isLoading}>

      {isSuccess && (
        <SuccessBox> 
          <div> CPanel Instance Successfully created. </div>
          <div> Please visit your website : &nbsp; <a target="_blank" href={"http://" + domain}> { domain } </a> </div>
          Or <span style={{cursor: "pointer", color: "-webkit-link"}} onClick={() => setIsSuccess(false)}>Continue adding... </span>
        </SuccessBox>)}

      {!isSuccess && <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>        
        <div>
          <Label> Domain : </Label>
          <Input 
            name="domain" 
            ref={register({ required: true })} 
            value={domain} 
            onChange={domainChange}
          />
          { errors.domain && <span>This field is required</span> }
        </div>
        
        <div>
          <Label> Username : </Label>
          <Input 
            name="username" 
            ref={register({ required: true })} 
            value={username} 
            onChange={usernameChange} 
          />
          {errors.username && <span>This field is required</span>}
        </div>

        <div>
          <Label> Password : </Label>
          <Input 
            name="password" 
            ref={register({ required: true })} 
            value={password} 
            onChange={passwordChange} 
          />
          {errors.password && <span>This field is required</span>}
        </div>
        
        <ActionButton type="submit"> Submit </ActionButton>

      </form>}
    </Layout>
  )
};

export default AddAccount