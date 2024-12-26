import { useState } from "react";

function InputExample () {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [form, setForm] = useState ({age: "", address: ""})
  const onChangeName = (event) => setName(event.target.value)
  const onChangeSurname = (event) => setSurname(event.target.value)
  const onChangeInput = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  };
  return(
    <div>
      Please enter a name  <br />
      <input type="text" value ={name}
      onChange = {onChangeName}
      />
      <br />
      {name}
      <hr/>
      <br />
      Please enter a surname  <br />
      <input type="text" value ={surname}
      onChange = {onChangeSurname}
      />
      <br />
      {surname}
      <hr/>
      <br />
      Please enter an age  <br />
      <input name= "age" type="text" value ={form.age}
      onChange = {onChangeInput}
      />
      <br />
      {form.age}
      <hr/>
      <br />
      Please enter an address  <br />
      <input name= "address" type="text" value ={form.address}
      onChange = {onChangeInput}
      />
      <br />
      {form.address}

      <hr/>
      <br />
      <br />
      {name} {surname}
      <br />age: {form.age}
      <br />address: {form.address}
    </div>
  )
}

export default InputExample;