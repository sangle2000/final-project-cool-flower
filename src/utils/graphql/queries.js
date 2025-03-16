import { gql } from "@apollo/client";

export const PRODUCT_QUERY = gql`
  query {
      productData{
        status
        message
        data {
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
