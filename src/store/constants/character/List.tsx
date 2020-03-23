export enum ActionType {
  CHARACTER_LIST_FAILED = 'CHARACTER_LIST_FAILED',
  CHARACTER_LIST_FETCH = 'CHARACTER_LIST_FETCH',
  CHARACTER_LIST_SEARCH = 'CHARACTER_LIST_SEARCH',
  CHARACTER_LIST_SUCCEEDED = 'CHARACTER_LIST_SUCCEEDED',
}

export interface CharacterListActionType {
  currentPage: number
  error?: boolean
  name: string
  pages: {}
  payload?: any
  type: string
}

type Dictionary<T> = { [index: number]: T }
export interface CharacterListStateType {
  currentPage: number
  error?: boolean
  loading: boolean
  name: string
  pages: Dictionary<number>
  totalPages: number
}
