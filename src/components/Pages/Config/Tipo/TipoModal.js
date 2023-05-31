import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../../Modal/Modal'
import Input from '../../../Forms/Inputs/Input'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnVoltar from '../../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import { TipoContext } from './TipoContext'

const TipoModal = () => {
  const context = useContext(TipoContext)
  const [ nome, setNome ] = useState('')

  useEffect(() => {
    setNome(context.editTarget?.nome || '')
  }, [context.editTarget])

  const handleSubmit = event => {
    event.preventDefault()
    console.log('ala')
  }

  return (
    <Modal title='Editar Tipo' active={context.editTarget}>
      <form style={{marginBottom: '0'}} onSubmit={handleSubmit}>
        <Input 
          name='Novo nome'
          value={nome}
          onChange={({target}) => setNome(target.value)}
          required
        />
        <FormContainer>
          <BtnVoltar onClick={() => context.setEditTarget(null)} />
          <BtnSalvar/>
        </FormContainer>
      </form>
    </Modal>
  )
}

export default TipoModal
