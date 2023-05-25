import React from 'react'
import ToggleForm from '../../../Forms/ToggleForm/ToggleForm'
import Input from '../../../Forms/Inputs/Input'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnReset from '../../../Forms/Buttons/BtnReset'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'

const ModeloToggleForm = () => {
  return (
    <div className='form-page'>
      <ToggleForm title='Modelo toggle form'>
        <form>
          <Input name='texto' type='text'/>
          <Input name='texto-2' type='text'/>

          <FormContainer>
            <BtnReset/>
            <BtnSalvar/>
          </FormContainer>
        </form>
      </ToggleForm>
    </div>
  )
}

export default ModeloToggleForm
