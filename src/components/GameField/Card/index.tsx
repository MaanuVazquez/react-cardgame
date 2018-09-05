import * as React from 'react'
import {Effect, ICard} from '../../../types'
import {pluralize} from '../../../utils'
import Attack from './assets/Attack.svg'
import Heal from './assets/Heal.svg'
import Shield from './assets/Shield.svg'
import styles from './styles.css'

interface IProps {
  card: ICard
  onClick: (id: string, description: string) => void
}

interface IState {
  description: string
}

export default class Card extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      description: this.cardText()
    }
  }

  public handleOnClick = () => {
    const {
      props: {
        onClick,
        card: {id}
      },
      state: {description}
    } = this
    onClick(id, description)
  }

  public render() {
    const {description} = this.state
    return (
      <div onClick={this.handleOnClick} className={styles.card}>
        {this.cardImage()} {description}
      </div>
    )
  }

  private cardText = () => {
    const {
      card: {value, effect}
    } = this.props

    switch (effect) {
      case Effect.DAMAGE:
        return `The user uses his rusty sword to attack the enemy for ${value} hp ${pluralize(value, 'point')}`
      case Effect.SHIELD:
        return `The user spells some cliche words and suddenly his shield increases by ${value}`
      default:
        return `The user drinks from a strange bottle with a green sustance that heals him by ${value} hp ${pluralize(
          value,
          'point'
        )}`
    }
  }

  private cardImage = () => {
    const {
      card: {effect}
    } = this.props
    switch (effect) {
      case Effect.DAMAGE:
        return <img className={styles.cardImage} src={Attack} alt="" />
      case Effect.SHIELD:
        return <img className={styles.cardImage} src={Shield} alt="" />
      default:
        return <img className={styles.cardImage} src={Heal} alt="" />
    }
  }
}
