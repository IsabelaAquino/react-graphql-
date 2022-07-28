import React, {useEffect, useState} from 'react';
import {gql, useQuery} from '@apollo/client'

const GET_USER = gql`
  query {
    users {
      id,
      name,
      email,
      phone,
      password,
      avatar
    }
  }
`

export type Usuarios = {
  id: string
  name: string
  email: string
  phone: string
  password: string
  avatar: string
}

function App() {
  const {data, loading} = useQuery(GET_USER)

  console.log("users", data)
  if(loading)
    return <p>Carregando...</p>

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
      {
        data?.users.map((user: Usuarios) => 
          <li key={user.id}>{user.name}</li>
        )
      }
      </ul>
    </div>
  )
};

export default App;

