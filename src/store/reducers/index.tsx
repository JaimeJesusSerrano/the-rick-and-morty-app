import { combineReducers } from 'redux'
import { characterReducer } from '~Store/reducers/character'
import { episodeListReducer } from '~Store/reducers/episodeList'
import { locationReducer } from '~Store/reducers/location'

const rootReducer = combineReducers({
  character: characterReducer,
  episodeListState: episodeListReducer,
  location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
