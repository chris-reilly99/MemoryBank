import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        firstName
        lastName
      }
    }
  }
`;

export const ADD_MEMORY = gql`
mutation addMemory($memoryText: String!, $emotion: String!, $date: String!, $keyword: String){
    addMemory(memoryText: $memoryText, emotion: $emotion, date: $date, keyword: $keyword){
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