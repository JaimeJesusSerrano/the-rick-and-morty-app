import { Character } from '~Api/types'

export enum ActionType {
  COMPARATOR_CHARACTER_SELECTED_PUT_FAILED = 'COMPARATOR_CHARACTER_SELECTED_PUT_FAILED',
  COMPARATOR_CHARACTER_SELECTED_PUT_SUCCESS = 'COMPARATOR_CHARACTER_SELECTED_PUT',
  COMPARATOR_CHARACTER_SELECTED_DEL_FAILED = 'COMPARATOR_CHARACTER_SELECTED_DEL_FAILED' ,
  COMPARATOR_CHARACTER_SELECTED_DEL_SUCCESS = 'COMPARATOR_CHARACTER_SELECTED_DEL_SUCCESS',
  COMPARATOR_CHARACTER_SELECTED_RESET_SUCCESS = 'COMPARATOR_CHARACTER_SELCTED_RESET_SUCCESS',
}

export interface StateType {
  error?: boolean
  charactersSelected: Character[]
}


interface PayloadType {
  character: Character
  id?: number
}

export interface RequestType {
  error?: boolean
  payload: PayloadType
  type: string
}

interface PayloadDeleteType{
  id: number
}

export interface DeleteType {
  error?: boolean
  payload: PayloadDeleteType
  type: string
}
