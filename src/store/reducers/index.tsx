import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'
import { locationListReducer } from '~Store/reducers/locationList'

const rootReducer = combineReducers({
  characterListState: characterListReducer,
  locationListState: locationListReducer
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
