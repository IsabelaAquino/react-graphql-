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
`;
export const CREATE_USER = gql`
  mutation ($name: String! $email: String! $phone: String! $password: String! $avatar: String!){
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
  }
`