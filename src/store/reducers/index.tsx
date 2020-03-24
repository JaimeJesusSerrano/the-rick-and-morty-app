import { combineReducers } from 'redux'
import { characterReducer } from '~Store/reducers/character'
import { episodeReducer } from '~Store/reducers/episode'
import { locationReducer } from '~Store/reducers/location'

const rootReducer = combineReducers({
  character: characterReducer,
  episode : episodeReducer,
  location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
