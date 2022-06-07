import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      memories {
            _id
            memoryOwner
            memoryText
            keyword
            emotion
            date
            createdAt
        }
    }
  }
`;

export const QUERY_USERS = gql`
query users() {
    users {
        _id
        username
        email
        memories {
            _id
            memoryOwner
            memoryText
            keyword
            emotion
            date
            createdAt
        }
    }
}
`

export const QUERY_MEMORIES = gql`
query getMemories {
    memories {
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
//WILL FINISH ONCE WE'RE CERTAIN WHAT WE'RE PASSING IN
// export const QUERY_ONE_MEMORY = gql`
// query getSingleMemory()
// `

export const QUERY_ME = gql`
query me {
    me {
        _id
        username
        email
        memories{
            _id
            memoryOwner
            memoryText
            keyword
            emotion
            date
            createdAt
        }
    }
}
`