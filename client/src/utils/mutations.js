import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_MEMORY = gql`
mutation addMemory($memoryText: String!, $emotion: String!, date: String!){
    addMemory(memoryText: $memoryText, emotion: $emotion, date: $date){
        _id
        memoryOwner
        memoryText
        keyword
        emotion
        date
        createdAt
    }
}
`

//WILL FINISH ONCE server/schemas/resolvers.js FINISHED
// export const UPDATE_MEMORY = gql`
// mutation updateMemory()
// `

//This may need adjustment as well
export const REMOVE_MEMORY = gql`
mutation removeMemory($memoryId: ID){
    removeMemory(memoryId: $memoryId){
        _id
        memoryOwner
        memoryText
        keyword
        emotion
        date
        createdAt
    }
}
`