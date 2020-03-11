import { combineReducers } from 'redux'
import { charactersReducer } from '~Store/reducers/characters'

const rootReducer = combineReducers({
  characterState: charactersReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
