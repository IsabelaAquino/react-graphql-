import {gql} from '@apollo/client'

export const GET_USER = gql`
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
export const CREATE_USER = gql`
  createUser(
    name: $name
    email: $email
    phone: $phone
    password: $password
    avatar: $avatar
  ){
    id,
    name,
    email,
    phone,
    password,
    avatar
  }
`