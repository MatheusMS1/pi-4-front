import React from 'react'
import Input from '../../Forms/Inputs/Input'
import Textarea from '../../Forms/Inputs/Textarea'
import Select from '../../Forms/Inputs/Select'
import BtnVoltar from '../../Forms/Buttons/BtnVoltar'
import BtnSalvar from '../../Forms/Buttons/BtnSalvar'
import Title from '../../Title/Title'
import FormContainer from '../../Forms/Containers/FormContainer'

const NewEquipment = () => {

  return (
    <div className='form-page' >
      <Title>Novo Equipamento</Title>

      <form>
        <Input type='text' placeholder='Ex.: Teclado' name='Nome' />

        <FormContainer>
          <Input type='number' placeholder='Ex.: 123456' name='Código SAP' />
          <Select name='Tipo'>
            <option value={'ala'}>Periférico</option>
            <option value={'ala-2'}>ala-2</option>
            <option value={'ala-3'}>ala-3</option>
            <option value={'ala-4'}>ala-4</option>
            <option value={'ala-5'}>ala-5</option>
          </Select>
        </FormContainer>

        <Input type='number' placeholder='1, 2 ou 3' name='Prioridade' />
        <Input type='text' placeholder='Ex.: Unidade' name='Unidade de medida' />
        <Textarea name='Descrição' placeholder='Ex.: Teclado sem fio com problema' />
        


        <FormContainer>
          <BtnVoltar />

          <BtnSalvar />

        </FormContainer>
      </form>
    </div>
  )
}

export default NewEquipment