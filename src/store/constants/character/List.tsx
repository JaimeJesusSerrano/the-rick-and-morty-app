import { Action } from 'redux'
import { Character, ResultsInfo } from '~Api/types'

export enum ActionType {
  CHARACTER_LIST_CONNECTION_FAILED = 'CHARACTER_LIST_CONNECTION_FAILED',
  CHARACTER_LIST_FAILED = 'CHARACTER_LIST_FAILED',
  CHARACTER_LIST_FETCH = 'CHARACTER_LIST_FETCH',
  CHARACTER_LIST_SEARCH = 'CHARACTER_LIST_SEARCH',
  CHARACTER_LIST_SUCCEEDED = 'CHARACTER_LIST_SUCCEEDED',
}

export interface CharacterListActionType {
  criticalError?: boolean
  currentPage: number
  error?: boolean
  name: string
  pages: {}
  payload: ResultsInfo<Character>
  type: string
}

type Dictionary<T> = { [index: number]: T }
export interface CharacterListStateType {
  criticalError?: boolean
  currentPage: number
  error?: boolean
  loading: boolean
  name: string
  pages: Dictionary<Character[]>
  totalPages: number
}

interface PayloadType {
  name: string
  page: number
}
export interface DispatchType extends Action<ActionType> {
  payload: PayloadType
}
