import { combineReducers } from 'redux'
import { listReducer } from './List'
import { CharacterListStateType } from '~Store/constants/character/List'

interface CharacterType {
  list: CharacterListStateType
}

export const characterReducer = combineReducers<CharacterType>({
  list: listReducer,
})
