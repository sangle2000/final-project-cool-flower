import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query {
      productData{
        status
        message
        data {
          id
          productCode
          name
          description
          price
          salePercent
          stock
          categoryId
          productType
          imageUrl
          createdAt
        }
      }
    }
`;

export const USER_CART_DATA_QUERY = gql`
    query {
      userCartData {
        status
        message
        data {
          id
          productCode
          name
          price
          salePercent
          quantity
          imageUrl
        }
      }
    }
`
