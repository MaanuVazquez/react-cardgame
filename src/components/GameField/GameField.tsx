import * as React from 'react'
import {MutationFn} from 'react-apollo'
import {IMutationNextTurn} from '.'
import {Effect, IGame} from '../../types'
import Avatar from './Avatar'
import Card from './Card'
import styles from './styles.css'

interface IProps {
  game: IGame
  nextTurn: MutationFn<IMutationNextTurn>
}

export default class GameField extends React.Component<IProps> {
  public handleOnCardClick = async (cardId?: string, description?: string) => {
    const {
      nextTurn,
      game: {id: gameId, turnsLeft}
    } = this.props

    if (!turnsLeft) {
      return
    }

    const variables = {
      cardId,
      gameId
    }

    const mutation = await nextTurn({variables})
    if (mutation && mutation.data) {
      if (mutation.data.nextTurn.monsterEffect.effect === Effect.HORROR) {
        this.handleOnCardClick()
      }
    }
  }

  public render() {
    const {
      game: {
        monster: {id: monsterId, name: monsterName, image: monsterImage, ...monsterAttributes},
        player: {id, name, cards, ...playerAttributes},
        turnsLeft,
        currentTurn,
        maxTurns
      }
    } = this.props
    const PLAYER_IMAGE = 'http://www.jdperon.gov.ar/wp-content/uploads/FotoBioPeronInst-e1381427876375.jpg'

    if (monsterAttributes.hp <= 0) {
      return <div>YOU WIN!</div>
    }

    if (playerAttributes.hp <= 0) {
      return <div>WASTED</div>
    }

    return (
      <div>
        <div className={styles.stats}>
          Game Stats
          <p>Current Turn: {currentTurn}</p>
          <p>
            Turns Left: {turnsLeft} of {maxTurns} turns
          </p>
        </div>
        <Avatar
          className={styles.enemyAvatar}
          id={monsterId}
          name={monsterName}
          image={monsterImage}
          attributes={{...monsterAttributes}}
        />
        <Avatar
          className={styles.playerAvatar}
          id={id}
          name={name}
          image={PLAYER_IMAGE}
          attributes={{...playerAttributes}}
        />
        <div className={styles.cards}>
          {cards.map(card => (
            <Card onClick={this.handleOnCardClick} key={card.id} card={card} />
          ))}
        </div>
      </div>
    )
  }
}
