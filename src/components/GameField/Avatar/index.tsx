import classnames from 'classnames'
import * as React from 'react'
import styles from './styles.css'

interface IProps {
  id: string
  name: string
  image: string
  attributes: {
    hp: number
    maxHp: number
    shield: number
  }
  className?: string
}

export default class Avatar extends React.Component<IProps> {
  public render() {
    const {
      attributes: {hp, maxHp, shield},
      name,
      image,
      id,
      className
    } = this.props
    return (
      <div className={classnames(className, styles.playerCard)} id={`playerCard-${id}`}>
        <img src={image} alt={`player ${name} avatar`} />
        <p>
          <strong>{name}</strong>
        </p>
        <p>
          <strong>HP:</strong>
          {hp} of {maxHp}
        </p>
        <p>
          <strong>Shield:</strong> {shield}
        </p>
      </div>
    )
  }
}
