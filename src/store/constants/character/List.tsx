import { Action } from 'redux'
import { Character, ResultsInfo } from '~Api/types'

export enum ActionType {
  CHARACTER_LIST_CONNECTION_FAILED = 'CHARACTER_LIST_CONNECTION_FAILED',
  CHARACTER_LIST_FAILED = 'CHARACTER_LIST_FAILED',
  CHARACTER_LIST_FETCH = 'CHARACTER_LIST_FETCH',
  CHARACTER_LIST_SEARCH = 'CHARACTER_LIST_SEARCH',
  CHARACTER_LIST_SUCCEEDED = 'CHARACTER_LIST_SUCCEEDED',
}

export interface DispatchType extends Action {
  payload: PayloadType
}

interface PayloadType {
  name: string
  page: number
}

export interface ResponseType {
  criticalError?: boolean
  currentPage: number
  error?: boolean
  name: string
  pages: {}
  payload: ResultsInfo<Character>
  type: string
}

type Dictionary<T> = { [index: number]: T }
export type PagesType = Dictionary<Character[]>
export interface StateType {
  criticalError?: boolean
  currentPage: number
  error?: boolean
  loading: boolean
  name: string
  pages: PagesType
  totalPages: number
}
