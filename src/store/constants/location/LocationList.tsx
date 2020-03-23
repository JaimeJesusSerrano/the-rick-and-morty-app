import { Action } from 'redux';

export enum ActionType {
  LOCATION_LIST_FAILED = 'LOCATION_LIST_FAILED',
  LOCATION_LIST_CONNECTION_FAILED = 'LOCATION_LIST_CONNECTION_FAILED',
  LOCATION_LIST_FETCH = 'LOCATION_LIST_FETCH',
  LOCATION_LIST_SEARCH = 'LOCATION_LIST_SEARCH',
  LOCATION_LIST_SUCCEEDED = 'LOCATION_LIST_SUCCEEDED',
}

export interface LocationListActionType {
  criticalError?: boolean
  currentPage?: number
  error?: boolean
  name: string
  page: number
  pages?: {}
  payload?: any
  type?: string
}

type Dictionary<T> = { [index: number]: T | undefined }
// type Dictionary = Record<number, {}>
export interface LocationListStateType {
  criticalError?: boolean
  currentPage?: number
  error?: boolean
  loading?: boolean
  name?: string
  pages: Dictionary<number|undefined>
  totalPages: number
}

export interface DispatchAction extends Action<ActionType> {
  payload: LocationListActionType;
}
