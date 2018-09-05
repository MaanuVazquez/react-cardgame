import * as React from 'react'
import {MutationFn} from 'react-apollo'
import {IMutationCreateGame} from '.'
import {IGame} from '../../types'
import GameField from '../GameField/'
import StartForm from '../StartForm'
import './App.css'

interface IProps {
  createGame: MutationFn<IMutationCreateGame>
}

interface IState {
  game: IGame | null
}

export default class App extends React.Component<IProps, IState> {
  public state = {
    game: null
  }

  public handleNameOnSubmit = async (name: string) => {
    const variables = {
      name
    }
    const mutation = await this.props.createGame({variables})
    if (mutation && mutation.data) {
      this.setState({game: mutation.data.createGame})
    }
  }

  public render() {
    const {game} = this.state
    return <div>{game ? <GameField game={game} /> : <StartForm onSubmit={this.handleNameOnSubmit} />}</div>
  }
}
