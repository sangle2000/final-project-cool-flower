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

export const USER_ORDER_DATA_QUERY = gql`
    query {
      userOrderData {
        status
        message
        data {
          orderCode
          orderStatus
          orderInformation {
              name
              phone
              address
              note
            }
          itemsList
          {
            productId
            productName
            quantity
            price
            imageUrl
            salePercent
          }
        }
      }
    }
`
