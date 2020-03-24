import { combineReducers } from 'redux'
import { listReducer } from './List'
import { StateType as CharacterListStateType } from '~Store/constants/character/List'

interface CharacterType {
  list: CharacterListStateType
}

export const characterReducer = combineReducers<CharacterType>({
  list: listReducer,
})
