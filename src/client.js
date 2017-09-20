import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// __SIMPLE_API_ENDPOINT_ looks similar to: `https://api.graph.cool/simple/v1/<PROJECT_ID>`
const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj7r9x4n00lol0116yywzeymv' })
export default new ApolloClient({ networkInterface })
