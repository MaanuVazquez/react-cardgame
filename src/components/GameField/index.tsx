import * as React from 'react'
import {Mutation, MutationFn, Query, QueryResult} from 'react-apollo'
import {Effect, IGame} from '../../types'
import GameField from './GameField'
import GET_GAME from './graphql/getGame.graphql'
import NEXT_TURN from './graphql/nextTurn.graphql'

interface IProps {
  game: IGame
}

export interface IMutationNextTurn {
  nextTurn: {
    game: IGame
    monsterEffect: {
      effect: Effect
      value: number
    }
  }
}

interface IQueryGetGame {
  game: IGame
}

const ApolloContainer = (props: IProps) => (
  <Query query={GET_GAME} variables={{gameId: props.game.id}}>
    {({data, error, loading}: QueryResult<IQueryGetGame>) => {
      if (error) {
        console.error(error)
      }
      if (loading || !data) {
        return null
      }
      return (
        <Mutation mutation={NEXT_TURN}>
          {(nextTurn: MutationFn<IMutationNextTurn>) => <GameField nextTurn={nextTurn} game={data.game} />}
        </Mutation>
      )
    }}
  </Query>
)

export default ApolloContainer
