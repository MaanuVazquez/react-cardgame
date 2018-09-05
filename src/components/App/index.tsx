import * as React from 'react'
import {Mutation, MutationFn} from 'react-apollo'
import {IGame} from '../../types'
import App from './App'
import CREATE_GAME from './graphql/createGame.graphql'

export interface IMutationCreateGame {
  createGame: IGame
}

export default class ApolloContainer extends React.Component {
  public renderApp = (createGame: MutationFn<IMutationCreateGame>) => <App createGame={createGame} />

  public render() {
    return <Mutation mutation={CREATE_GAME}>{this.renderApp}</Mutation>
  }
}
