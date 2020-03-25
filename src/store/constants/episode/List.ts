import { Action } from "redux";
import { Episode, ResultsInfo } from '~Api/types'

export enum ActionType {
  EPISODE_LIST_CONNECTION_FAILED = 'EPISODE_LIST_CONNECTION_FAILED',
  EPISODE_LIST_FAILED = 'EPISODE_LIST_FAILED',
  EPISODE_LIST_FETCH = 'EPISODE_LIST_FETCH',
  EPISODE_LIST_SEARCH = 'EPISODE_LIST_SEARCH',
  EPISODE_LIST_SUCCEEDED = 'EPISODE_LIST_SUCCEEDED',
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
  page: {}
  payload: ResultsInfo<Episode>
  type: string
}

type Dictionary<T> = { [index: number]: T}
export interface StateType {
  criticalError?: boolean
  currentPage: number
  error?: boolean
  loading: boolean
  name: string
  pages: Dictionary<Episode[]>
  totalPages: number
}



