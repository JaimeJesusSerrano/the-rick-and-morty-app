import { CharacterInfo } from '~Api/types'
import { ReduxActionType } from '~Store/actions'
import {
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_SUCCEEDED,
  FETCH_CHARACTERS_FAILED,
} from '~Store/constants/characters'

interface CharacterStateType {
  loading: boolean
  results: CharacterInfo
  errors: any
}

const initialState: CharacterStateType = {
  loading: false,
  results: {} as CharacterInfo,
  errors: {},
}

export const charactersReducer = (
  state: CharacterStateType = initialState,
  action: ReduxActionType
) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, loading: true }
    case FETCH_CHARACTERS_SUCCEEDED:
      return { ...state, results: action.payload, loading: false }
    case FETCH_CHARACTERS_FAILED:
      return { ...state, error: action.payload }
    default:
      return initialState
  }
}

export const getCharacterResults = (state: CharacterStateType) => state.results
