import React, { useState } from 'react'
import ToggleForm from '../../Forms/ToggleForm/ToggleForm'
import Input from '../../Forms/Inputs/Input'
import Textarea from '../../Forms/Inputs/Textarea'
import FormContainer from '../../Forms/Containers/FormContainer'
import BtnReset from '../../Forms/Buttons/BtnReset'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'

const ZonaForm = () => {
  const [ name, setName ] = useState(null)
  const [ description, setDescription ] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    fetch('https://api-pi-2on3.onrender.com/zonas', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({name, description})
    })
  }

  return (
    <ToggleForm title='Zonas'>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='Nome'
          placeholder='Armario XYZ'
          required
          onChange={({target}) => setName(target.value)}
        />
        <Textarea
          type='text'
          name='Descrição'
          placeholder='Aguardando Teste'
          required
          onChange={({target}) => setDescription(target.value)}
        />
        <FormContainer>
          <BtnReset/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </ToggleForm>
  )
}

export default ZonaForm
