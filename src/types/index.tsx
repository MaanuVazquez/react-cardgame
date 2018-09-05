export interface IGame {
  id: string
  currentTurn: number
  maxTurns: number
  turnsLeft: number
  player: IPlayer
  monster: IMonster
}

export interface IPlayer {
  id: string
  name: string
  hp: number
  maxHp: number
  shield: number
  cards: ICard[]
}

export interface IMonster {
  id: string
  name: string
  hp: number
  maxHp: number
  shield: number
  image: string
}

export interface ICard {
  id: string
  value: number
  effect: Effect
}

export enum Effect {
  HEAL = 'HEAL',
  DAMAGE = 'DAMAGE',
  SHIELD = 'SHIELD',
  HORROR = 'HORROR'
}
