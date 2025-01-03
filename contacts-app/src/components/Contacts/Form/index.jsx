import React from 'react'
import { useState,useEffect } from "react";

const initialFormValues = {fullname:'',phone_number:''}

function Form({addContacts, contacts}) {
  const [form, setForm] = useState(initialFormValues)

  useEffect (() => {
    setForm(initialFormValues);
  },[contacts])

  const onChangeInput = (event) => {
    setForm({...form,[event.target.name]: event.target.value})
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (form.fullname === '' || form.phone_number === '') {
      return false;
    }
    addContacts([...contacts,form]);

  }

  return (
    <form onSubmit={onSubmit}>
      <div>
      <input name="fullname" placeholder="Full Name" value = {form.fullname} onChange={onChangeInput}/>
      </div>
      <div>
      <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

export default Form