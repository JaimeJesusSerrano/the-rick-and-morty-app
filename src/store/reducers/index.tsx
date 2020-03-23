import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'
import { locationReducer } from '~Store/reducers/location'
import { episodeListReducer} from '~Store/reducers/episodeList'

const rootReducer = combineReducers({
  characterListState: characterListReducer,
  location: locationReducer,
  episodeListState : episodeListReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer