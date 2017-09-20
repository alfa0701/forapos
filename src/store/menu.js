import { query } from 'mobx-apollo'
import { gql } from 'react-apollo'
import client from '../client'

const allCategoriesQuery = gql`
  query {
    allCategories(filter: {shop: {id: "cj7rb8wm60q3e0175cwauqqir"}}) {
      id
      name
      items {
        id
        name
        price
      }
    }
  }`

export default new class {
  @query categories = { client, query: allCategoriesQuery }
}()
