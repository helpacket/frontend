import {gql} from "apollo-boost";

export const BANDS_QUERY = gql`
    query {
        bands {
            edges {
                node {
                    name
                }
            }
        }
    }
`;

export const LOGIN_QUERY = gql`
    mutation ($username: String!, $password: String!) {
        tokenAuth(username: $username, password: $password) {
            token
        }
    }
`;


export const USER_QUERY = gql`
    query {
        people {
            edges {
                node {
                    firstName
                    lastName
                }
            }
        }
    }
`;
