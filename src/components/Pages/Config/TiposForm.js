import React, { useState } from 'react'
import ToggleForm from '../../Forms/ToggleForm/ToggleForm'
import Input from '../../Forms/Inputs/Input'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import FormContainer from '../../Forms/Containers/FormContainer'
import BtnReset from '../../Forms/Buttons/BtnReset'

const TiposForm = () => {
  const [ nome, setNome ] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    const body = {nome}
    console.log(JSON.stringify(body))

    fetch('https://api-pi-2on3.onrender.com/tipos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
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
          onChange={({target}) => setNome(target.value)}
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
