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

export const CREATE_REQUEST = gql`
    mutation ($input: RequestMutationInput!) {
        request (input: $input){
            result{
                id,
                amount
            }
        }
    }
`;

export const CREATE_SUPPLY = gql`
    mutation ($input: SupplyMutationInput!) {
        supply (input: $input){
            result{
                id,
                amount
            }
        }
    }
`;

export const TRANSACTION_QUERY = gql`
    query {
        supplies {
            edges{
                node{
                    id,
                    amount,
                    creationDatetime,
                    product{
                        id,
                        name
                    },
                    status
                }
            }
        },
        requests {
            edges{
                node{
                    id,
                    amount,
                    creationDatetime,
                    product{
                        id,
                        name
                    },
                    status
                }
            }
        }
    }
`;

export const PRODUCT_QUERY =  gql`
    query {
        products {
            edges {
               node {
                    id,
                    name
                }
            }
        }
    }
`;