import { gql } from "@apollo/client";

export const PROFILE_QUERY = gql`
  query ProfileQuery {
    protectedData {
      status
      message
      data {
        id
        email
        name
        phone
        address
        role
        createdAt
        wallet
      }
    }
  }
`;
