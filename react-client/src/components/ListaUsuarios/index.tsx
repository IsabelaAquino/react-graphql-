import React from 'react';
import {useQuery} from '@apollo/client'
import { Usuarios } from '../UsuarioType';
import { GET_USER } from '../../services/userServices'

export default function ListaUsuarios() {
  const {data, loading} = useQuery(GET_USER)

  if(loading)
    return <p>Carregando...</p>

  return (
    <>
        <ul>
        {
          data?.users.map((user: Usuarios) => 
            <li key={user.id}>{user.name}</li>
          )
        }
        </ul>
    </>
  )
}
