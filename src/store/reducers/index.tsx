import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'
import { locationReducer } from '~Store/reducers/location'
import { episodeReducer } from '~Store/reducers/episode'

const rootReducer = combineReducers({
  characterListState: characterListReducer,
  location: locationReducer,
  episodeListState : episodeReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
