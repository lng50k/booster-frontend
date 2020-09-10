import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import { useForm } from "react-hook-form";
import { Input, Label } from '../components/styled-elements'
import ActionButton from '../components/button-with-row'
import notify from '../components/store-notification';

const AddAccount = () => {

  const formStyle = {
    width: '60%'
  }

  const [submitState, setSubmitState] = useState(false)
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {
    const apiUrl = `http://127.0.0.1:8000/api/v1/whm/account`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch(apiUrl, requestOptions)
      .then((res) => res.json())
      .then((res) => {
        notify(res.message)
      });
  };
  
  return (
    <Layout title="Add Account">
      <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
        
        <div>
          <Label> Domain : </Label>
          <Input name="domain" ref={register({ required: true })} />
          {errors.domain && <span>This field is required</span>}
        </div>
        
        <div>
          <Label> Username : </Label>
          <Input name="username" ref={register({ required: true })} />
          {errors.username && <span>This field is required</span>}
        </div>

        <div>
          <Label> Password : </Label>
          <Input name="password" ref={register({ required: true })} />
          {errors.password && <span>This field is required</span>}
        </div>
        
        <ActionButton text="Submit" type="submit"/>

      </form>
    </Layout>
  )
};

export default AddAccount