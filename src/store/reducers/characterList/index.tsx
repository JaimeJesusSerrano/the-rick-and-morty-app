import {
  CHARACTER_LIST_FAILED,
  CHARACTER_LIST_FETCH,
  CHARACTER_LIST_SUCCEEDED,
} from '~Store/constants/characterList'

import { Character } from '../../../services/api/types'

type Dictionary = { [index: number]: {} }

interface CharacterListStateType {
  currentPage: number
  errors: any
  loading: boolean
  name: string
  pages: Dictionary // TODO add specific type
  totalPages: number
}

const initialState: CharacterListStateType = {
  currentPage: 0,
  errors: null,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

interface ReduxActionType {
  type: string
  payload?: any
  pages: {}
  currentPage: number
  name: string
}

export const characterListReducer = (
  state: CharacterListStateType = initialState,
  action: ReduxActionType
) => {
  switch (action.type) {
    case CHARACTER_LIST_FETCH:
      return { ...state, loading: true }
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
    case CHARACTER_LIST_FAILED:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return initialState
  }
}

let numberState = 0

const counter = (num: number = numberState) => {
  numberState += 1
  return numberState
}
let characters: Character[] = []

export const getCharacterListUntilPage = (
  state: CharacterListStateType,
  page: number
) => {
  type Characters = Character[]
  const emptyCharacterArray: Characters = []

  console.log('state.pages')
  console.log(state.pages)
  Object.entries(state.pages).map(([key, value]) => {
    console.log('index')
    console.log(key)
    console.log(value)
    console.log(page)
    if (Number(key) >= 1 && Number(key) <= page) {
      console.log(counter(1))
      const newCharacters: Character[] = value
        ? Object.values(value)
        : emptyCharacterArray
      characters = [...characters, ...newCharacters]
    }
    return characters
  })

  return characters
}
