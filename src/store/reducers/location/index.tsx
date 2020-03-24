import { combineReducers } from 'redux'
import { locationListReducer } from './LocationList'
import { LocationListStateType } from '~Store/constants/location/LocationList'

// Define location reducer interface
interface LocationType {
  list: LocationListStateType
}

export const locationReducer = combineReducers<LocationType>({
  list: locationListReducer,
})
