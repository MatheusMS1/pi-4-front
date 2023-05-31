import React from 'react'
import Modal from '../../../Modal/Modal'
import Input from '../../../Forms/Inputs/Input'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnVoltar from '../../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'

const TipoModal = ({target}) => {
  return (
    <Modal title='Editar Tipo'>
      <form style={{marginBottom: '0'}}>
        <Input name='Nome' />
        <FormContainer>
          <BtnVoltar/>
          <BtnSalvar/>
        </FormContainer>
      </form>
    </Modal>
  )
}

export default TipoModal
