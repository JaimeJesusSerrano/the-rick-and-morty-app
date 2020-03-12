import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'

const rootReducer = combineReducers({
  characterListState: characterListReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
