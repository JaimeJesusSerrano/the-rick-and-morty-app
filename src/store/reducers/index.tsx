import { combineReducers } from 'redux'
import { characterListReducer } from '~Store/reducers/characterList'
import { episodeListReducer} from '~Store/reducers/episodeList/indext'

const rootReducer = combineReducers({
  characterListState: characterListReducer,
  episodeListState : episodeListReducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
