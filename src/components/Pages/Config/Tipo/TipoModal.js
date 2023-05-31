import React, { useContext, useEffect, useState } from 'react'
import Modal from '../../../Modal/Modal'
import Input from '../../../Forms/Inputs/Input'
import FormContainer from '../../../Forms/Containers/FormContainer'
import BtnVoltar from '../../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../../Forms/Buttons/BtnSalvar'
import { TipoContext } from './TipoContext'

const TipoModal = () => {
  const { editTarget, setEditTarget, fetchTipos } = useContext(TipoContext)
  const [ loadingRequest, setLoadingRequest ] = useState(false)
  const [ nome, setNome ] = useState('')

  useEffect(() => {
    setNome(editTarget?.nome || '')
  }, [editTarget])

  const handleSubmit = event => {
    event.preventDefault()
    setLoadingRequest(true)
    const body = {nome}

    fetch(`https://api-pi-2on3.onrender.com/tipos/${editTarget?.id_tipo}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(body)
    }
    ).then(() => {
      fetchTipos()
      setEditTarget(null)
    })
  }

  return (
    <Modal title='Editar Tipo' active={editTarget}>
      <form style={{marginBottom: '0'}} onSubmit={handleSubmit}>
        <Input 
          name='Novo nome'
          value={nome}
          onChange={({target}) => setNome(target.value)}
          required
        />
        <FormContainer>
          <BtnVoltar disabled={loadingRequest} onClick={() => setEditTarget(null)} />
          <BtnSalvar disabled={loadingRequest} />
        </FormContainer>
      </form>
    </Modal>
  )
}

export default TipoModal
