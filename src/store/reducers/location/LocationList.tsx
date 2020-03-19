import { ActionType, LocationListStateType, LocationListActionType } from '~Store/constants/location/LocationList'
import { Location } from '~Api/types'

const initialState: LocationListStateType = {
  currentPage: 0,
  error: false,
  loading: false,
  name: '',
  pages: {},
  totalPages: 0,
}

export const locationListReducer = (
  state = initialState,
  action: LocationListActionType
): LocationListStateType => {
  const { type, payload, currentPage, name } = action
  switch (type) {
    case ActionType.LOCATION_LIST_FAILED:
      return {
        ...initialState,
        error: action.error,
        loading: false
      }
    case ActionType.LOCATION_LIST_FETCH:
        return { ...state, loading: true }
    case ActionType.LOCATION_LIST_SEARCH:
        return { ...initialState, loading: true }
    case ActionType.LOCATION_LIST_SUCCEEDED: 
        return {
          ...state,
          currentPage,
          loading: false,
          name,
          pages: {
            ...state.pages,
            [currentPage as number]: payload.results
          },
          totalPages: payload.info.pages
        }
    default:
       return initialState
  }
}

export const getLocationList = (state: LocationListStateType) => {
  let locations: Location[] = []
  const emptyLocationArray: Location[] = []

  Object.entries(state.pages).map(([key, value]) => {
    if (Number(key) >= 1 && Number(key)) {
      const newLocations: Location[] = value
        ? Object.values(value)
        : emptyLocationArray
      locations = [...locations, ...newLocations]
    }
    return locations
  })

  return locations
}