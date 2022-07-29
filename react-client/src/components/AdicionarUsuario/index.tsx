import React, {FormEvent, useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useMutation } from '@apollo/client';
import {CREATE_USER, GET_USER} from '../../services/userServices'
import { client } from '../../services/apollo';

export default function AdiciodarUsuario() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [avatar, setAvatar] = useState("")

  const [createUser, {data, loading, error}] = useMutation(CREATE_USER)

  async function addNvUsuario(e: FormEvent){
    e.preventDefault()

    if(!name){
      return
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
  }

  return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={addNvUsuario}
    >
      <TextField value={name}  onChange={e => setName(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
      <TextField value={email} onChange={e => setEmail(e.target.value)}  id="standard-basic" label="Standard" variant="standard" />
      <TextField value={phone} onChange={e => setPhone(e.target.value)}  id="standard-basic" label="Standard" variant="standard" />
      <TextField placeholder='url da imagem' onChange={e => setAvatar(e.target.value)}  value={avatar} id="standard-basic" label="Standard" variant="standard" />
      <TextField 
          label="Password"
          type="password"
          autoComplete="current-password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}  id="standard-basic" variant="standard" />
    </Box>
  )
}

