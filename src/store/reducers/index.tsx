import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'
import { charactersReducer } from '~Store/reducers/characters'

const rootReducer = combineReducers({
  characterState: charactersReducer,
  characterListState: characterListReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
