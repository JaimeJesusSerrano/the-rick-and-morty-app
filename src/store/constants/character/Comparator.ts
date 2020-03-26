import { Character } from '~Api/types'


export enum ActionType {
  COMPARATOR_CHARACTER_SELECTED_PUT_FAILED = 'COMPARATOR_CHARACTER_SELECTED_PUT_FAILED',
  COMPARATOR_CHARACTER_SELECTED_PUT_SUCCESS = 'COMPARATOR_CHARACTER_SELECTED_PUT',
}


// type CardPropsState = CardProps[] | [CardProps] | [CardProps, CardProps]
//
// const testProps : CardProps[] = []
//
// const cardTest : CardPropsState = testProps

export interface StateType {
  error?: boolean
  charactersSelected: Character[]
}

export interface RequestType {
  criticalError?: boolean
  error?: boolean
  payload: Character
  type: string
}
