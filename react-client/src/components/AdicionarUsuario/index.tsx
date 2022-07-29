import React, {FormEvent, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import {CREATE_USER, GET_USER} from '../../services/userServices'
import { client } from '../../services/apollo';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

interface NovoUser {
  fecharModal: () => void
}

export default function AdicionarUsuario({fecharModal}: NovoUser) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")

  const [validacao, setValidacao] = useState(true)

  const [createUser, {data, loading, error}] = useMutation(CREATE_USER)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #f1f1f1',
    boxShadow: 24,
    p: 4,
  };

  const textStyle = {
    width: '350px',
  };

  async function addNvUsuario(){

    if(name == '' || email == ''  || phone == ''  || password == '' ){
      setValidacao(false)
      return false
    }else{
      setValidacao(true)
    }

    await createUser({
      variables: {
        name, 
        email,
        phone,
        password,
        avatar
      },
      refetchQueries: [GET_USER],
      // update: (cache, {data: {createUser} =>{
      //   const {users} = client.readQuery({query: GET_USER})
      //   cache.writeQuery({
      //     query: GET_USER,
      //     data: {
      //       users: [
      //         ...users,
      //         createUser
      //       ] 
      //     }
      //   })
      // }})
    })
    fecharModal()
  }

  return (
    <Box sx={style} component="form">
        <h2 id="parent-modal-title">Novo Usuário:</h2>
          <TextField sx={textStyle} value={name}  onChange={e => setName(e.target.value)} id="standard-basic" label="Nome" variant="standard" />
          <TextField sx={textStyle} value={email} onChange={e => setEmail(e.target.value)}  id="standard-basic" label="Email" variant="standard" />
          <TextField sx={textStyle} value={phone} onChange={e => setPhone(e.target.value)}  id="standard-basic" label="Contato" variant="standard" />
          <TextField sx={textStyle} placeholder='url da imagem' onChange={e => setAvatar(e.target.value)}  value={avatar} id="standard-basic" label="Avatar" variant="standard" />
          <TextField 
              label="Password"
              type="password"
              autoComplete="current-password" 
              value={password} 
              sx={textStyle}
              onChange={e => setPassword(e.target.value)}  id="standard-basic" variant="standard" />
          <br/> <br />
          {
            !validacao ?
            <Alert severity="warning">Preencha os campos para cadastrar</Alert> : <></>
          }
          <Button color="success" variant="contained" 
          onClick={() => addNvUsuario()}
            >Adicionar</Button>
    </Box>
  
  )
}

