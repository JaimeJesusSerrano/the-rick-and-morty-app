import { Action } from "redux";

export enum ActionType {
  EPISODE_LIST_FAILED = 'EPISODE_LIST_FAILED',
  EPISODE_LIST_CONNECTION_FAILED = 'EPISODE_LIST_CONNECTION_FAILED',
  EPISODE_LIST_FETCH = 'EPISODE_LIST_FETCH',
  EPISODE_LIST_SEARCH = 'EPISODE_LIST_SEARCH',
  EPISODE_LIST_SUCCEEDED = 'EPISODE_LIST_SUCCEEDED',
}

type Dictionary<T> = { [index: number]: T | undefined }

export interface EpisodeListStateType {
  currentPage?: number
  criticalError?: boolean
  error?: boolean
  loading?: boolean
  name?: string
  pages: Dictionary<number|undefined>
  totalPages: number
}

export interface EpisodeListActionType {
  currentPage?: number
  criticalError?: boolean
  error?: boolean
  name: string
  page: number
  pages?: {}
  payload?: any
  type?: string
}

export interface DispatchAction extends Action<ActionType> {
  payload: EpisodeListActionType;
}
