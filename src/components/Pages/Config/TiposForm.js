import React, { useState } from 'react'
import ToggleForm from '../../Forms/ToggleForm/ToggleForm'
import Input from '../../Forms/Inputs/Input'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import FormContainer from '../../Forms/Containers/FormContainer'
import BtnReset from '../../Forms/Buttons/BtnReset'

const TiposForm = () => {
  const [ name, setName ] = useState(null)

  const handleChange = ({target}) => {
    setName(target.value)
    console.log(name)
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch('https://api-pi-2on3.onrender.com/tipos', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({name})
    })
  }

  return (
    <ToggleForm title='Tipos'>
      <form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          name='Nome' 
          required 
          placeholder='Periferico' 
          onChange={handleChange}
        />
        <FormContainer>
          <BtnReset/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </ToggleForm>
  )
}

export default TiposForm
