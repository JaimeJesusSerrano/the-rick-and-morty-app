import {
  CHARACTER_LIST_FAILED,
  CHARACTER_LIST_FETCH,
  CHARACTER_LIST_SEARCH,
  CHARACTER_LIST_SUCCEEDED,
} from '~Store/constants/characterList'

import { Character } from '../../../services/api/types'

type Dictionary = { [index: number]: {} }

interface CharacterListStateType {
  currentPage: number
  error: boolean
  loading: boolean
  name: string
  pages: Dictionary // TODO add specific type
  totalPages: number
}

const initialState: CharacterListStateType = {
  currentPage: 0,
  error: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

interface ReduxActionType {
  currentPage: number
  error?: boolean
  name: string
  pages: {}
  payload?: any
  type: string
}

export const characterListReducer = (
  state: CharacterListStateType = initialState,
  action: ReduxActionType
) => {
  switch (action.type) {
    case CHARACTER_LIST_FAILED:
      return {
        ...initialState,
        error: action.error,
        loading: false,
      }
    case CHARACTER_LIST_FETCH:
      return { ...state, loading: true }
    case CHARACTER_LIST_SEARCH:
      return { ...initialState, loading: true }
    case CHARACTER_LIST_SUCCEEDED:
      return {
        ...state,
        currentPage: action.currentPage,
        loading: false,
        name: action.name,
        pages: {
          ...state.pages,
          [action.currentPage]: action.payload.results,
        },
        totalPages: action.payload.info.pages,
      }
    default:
      return initialState
  }
}

export const getCharacterList = (state: CharacterListStateType) => {
  let characters: Character[] = []
  const emptyCharacterArray: Character[] = []

  Object.entries(state.pages).map(([key, value]) => {
    if (Number(key) >= 1 && Number(key)) {
      const newCharacters: Character[] = value
        ? Object.values(value)
        : emptyCharacterArray
      characters = [...characters, ...newCharacters]
    }
    return characters
  })

  return characters
}
