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
