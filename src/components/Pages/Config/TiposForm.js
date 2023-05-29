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

  return (
    <ToggleForm title='Tipos'>
      <form>
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
