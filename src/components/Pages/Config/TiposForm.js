import React, { useState } from 'react'
import ToggleForm from '../../Forms/ToggleForm/ToggleForm'
import Input from '../../Forms/Inputs/Input'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import FormContainer from '../../Forms/Containers/FormContainer'
import BtnReset from '../../Forms/Buttons/BtnReset'

const TiposForm = ({ fetchTipos }) => {
  const [ nome, setNome ] = useState(null)
  const [ loading, setLoading ] = useState(false)
  const [ active, setActive ] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    setLoading(true)
    const body = {nome}

    fetch('https://api-pi-2on3.onrender.com/tipos', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    })
    .then(() => {
      fetchTipos()
      setLoading(false)
      setActive(false)
    })
  }

  return (
    <ToggleForm title='Tipos' propActive={active}>
      <form onSubmit={handleSubmit}>
        <Input 
          type='text' 
          name='Nome' 
          required 
          placeholder='Periferico' 
          onChange={({target}) => setNome(target.value)}
        />
        <FormContainer>
          <BtnReset disabled={loading ? true : false}/>
          <BtnSalvar disabled={loading ? true : false}/>
        </FormContainer>
      </form>
    </ToggleForm>
  )
}

export default TiposForm
