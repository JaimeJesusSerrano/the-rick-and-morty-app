import { Character } from '~Api/types'
import {
  ActionType,
  CharacterListActionType,
  CharacterListStateType,
} from '~Store/constants/character/List'

const initialState: CharacterListStateType = {
  currentPage: 0,
  error: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

export const listReducer = (
  state: CharacterListStateType = initialState,
  action: CharacterListActionType
): CharacterListStateType => {
  switch (action.type) {
    case ActionType.CHARACTER_LIST_FAILED:
      return {
        ...initialState,
        error: action.error,
        loading: false,
      }
    case ActionType.CHARACTER_LIST_FETCH:
      return { ...state, loading: true }
    case ActionType.CHARACTER_LIST_SEARCH:
      return { ...initialState, loading: true }
    case ActionType.CHARACTER_LIST_SUCCEEDED:
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
