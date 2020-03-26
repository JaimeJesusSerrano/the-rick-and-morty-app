import { combineReducers } from 'redux'
import { listReducer } from './List'
import { StateType as CharacterListStateType } from '~Store/constants/character/List'
import { comparatorReducer } from './Comparator'
import { StateType as ComparatorStateType } from '~Store/constants/character/Comparator'

interface CharacterType {
  list: CharacterListStateType
  comparator: ComparatorStateType
}

export const characterReducer = combineReducers<CharacterType>({
  list: listReducer,
  comparator: comparatorReducer,
})
