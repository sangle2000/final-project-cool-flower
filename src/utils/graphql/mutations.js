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