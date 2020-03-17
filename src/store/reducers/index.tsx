import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'
import { locationListReducer } from '~Store/reducers/locationList'
import { episodeListReducer} from '~Store/reducers/episodeList'

const rootReducer = combineReducers({
  characterListState: characterListReducer,
  locationListState: locationListReducer,
  episodeListState : episodeListReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
