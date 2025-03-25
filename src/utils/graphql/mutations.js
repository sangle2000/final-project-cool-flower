// src/graphql/mutations.js
import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation SignUp($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      status
      token
      errors
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      status
      token
      errors
    }
  }
`;

export const UPDATE_PROFILE_MUTATION = gql`
  mutation UpdateProfile($name: String!, $phone: String!, $address: String!) {
    updateProfile(name: $name, phone: $phone, address: $address) {
      status
      token
      errors
    }
  }
`;

export const CHECKOUT_MUTATION = gql`
    mutation Payment($orderType: String!, $orderId: String!, $amount: Int!, $orderDesc: String!, $bankCode: String, $language: String){
      payment(
        orderType: $orderType
        orderId: $orderId
        amount: $amount
        orderDesc: $orderDesc
        bankCode: $bankCode
        language: $language
      ) {
        status
        redirectUrl
        errors
      }
    }
`