import * as React from 'react'
import {ApolloProvider} from 'react-apollo'
import * as ReactDOM from 'react-dom'
import App from './components/App'
import './index.css'
import {client} from './store'

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement)
