import { query } from 'mobx-apollo'
import { gql } from 'react-apollo'
import client from '../client'
import {action, observable} from "../../node_modules/mobx/lib/mobx";

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
        orders {
          id
          orderItems {
            id
            selection { name }
            amount
          }
        }
      }
    }
  }`

export default new class {
  @query saloons = { client, query: allSaloonsQuery }

  @observable
  ordersViewTable = null

  @action
  setOrdersViewTable(tableId) {
    this.ordersViewTable = tableId
  }
}()
