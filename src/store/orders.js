import { query } from 'mobx-apollo'
import { gql } from 'react-apollo'
import client from '../client'

const allSaloonsQuery = gql`
  query {
    allSaloons(filter: {shop: {id: "cj7rb8wm60q3e0175cwauqqir"}}) {
      id
      name
      description
      tables {
        id
        name
        description
      }
    }
  }`

export default new class {
  @query saloons = { client, query: allSaloonsQuery }
}()
